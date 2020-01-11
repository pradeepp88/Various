import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { AlertController } from "@ionic/angular";

import { Storage } from "@ionic/storage";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

import { RewardsService } from "./rewards.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  items: FirebaseListObservable<any>;

  success: boolean;

  user: string;

  constructor(
    private afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    private storage: Storage,
    private fbDb: AngularFireDatabase,
    private reward: RewardsService
  ) {
    this.items = fbDb.list("/users");
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl
      .create({
        message: alertTitle,
        subHeader: alertSub,
        buttons: ["OK"]
      })
      .then(alert => alert.present());
  }

  logOut() {
    //this.storageControl("delete");
    this.afAuth.auth
      .signOut()
      .then(loggedOut => {
        this.displayAlert("Logged out", "Come back and visit soon");
        this.success = false;
      })
      .catch(err => this.displayAlert("Error logging out", err));
  }

  storageControl(action, key?, value?) {
    if (action == "set") {
      return this.storage.set(key, value);
    }

    if (action == "get") {
      return this.storage.get(key);
    }

    if (action == "delete") {
      if (!key) {
        this.displayAlert("Warning", "About to delete all user data");
        return this.storage.clear();
      } else {
        this.displayAlert(key, "Deleting this users data");
        return this.storage.remove(key);
      }
    }
  }

  // saves a new user to firebase db using observable items
  saveNewUser(user) {
    let userObj = {
      creation: new Date().toDateString(),
      logins: 1,
      rewardCount: 0,
      lastLogin: new Date().toLocaleDateString(),
      id: ""
    };

    // save to firebase
    this.items
      .push({
        username: user,
        creation: userObj.creation,
        logins: userObj.logins,
        rewardCount: userObj.rewardCount,
        lastLogin: userObj.lastLogin
      })
      .then(res => {
        console.log(res.key);
        userObj.id = res.key;
        // save to local ionic storage
        return this.storageControl("set", user, userObj);
      });

    // promise caller expects a return result..
    return this.storageControl("get", user);
  }

  updateUser(theUser, theUserData) {
    let newData = {
      creation: theUserData.creation,
      logins: theUserData.logins + 1,
      rewardCount: theUserData.rewardCount,
      lastLogin: new Date().toLocaleDateString(),
      id: theUserData.id
    };
    // update firebase store reference
    this.items.update(newData.id, {
      logins: newData.logins,
      rewardCount: newData.rewardCount,
      lastLogin: newData.lastLogin
    });
    return this.storageControl("set", theUser, newData);
  }

  logOn(user, password) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(result => {
        this.storageControl("get", user).then(returned => {
          if (!returned) {
            this.saveNewUser(user).then(res =>
              this.displayAlert(user, "New account saved for this user!")
            );
          } else {
            this.reward.rewardsCheck(user, returned).then(rewardResult => {
              this.updateUser(user, rewardResult).then(updated =>
                console.log(user, updated)
              );
            });
          }
        });

        this.success = true;
        debugger;
        console.log(user);
        this.user = user;
        return result;
      })
      .catch(err => {
        this.success = false;
        this.displayAlert("Error logging in", err);
        return err;
      });
  }
}
