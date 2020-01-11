import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { UserService } from "../services/user.service";

// Firebase Cloud Messaging service
import { FCM } from "@ionic-native/fcm/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public menuData = [
    { title: "Our Menu", pic: "assets/img/coffee1.jpg", pushPage: "menu" },
    {
      title: "Account",
      pic: "assets/img/coffee2.jpg",
      pushPage: "account"
    },
    { title: "About Us", pic: "assets/img/coffee3.jpg", pushPage: "AboutPage" },
    {
      title: "Locations",
      pic: "assets/img/coffee4.jpg",
      pushPage: "LocationsPage"
    }
  ];

  logPage: any;
  loggedIn: any;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private fcm: FCM
  ) {}

  ngOnInit() {
    this.logPage = "LoginPage";

    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = this.userService.user = user.email;
      }
    });

    this.initFcm();
  }

  public handleMenuClick(menuPushPage) {
    console.log("menu click");
    this.navCtrl.navigateForward(menuPushPage);
  }

  signOff() {
    this.userService.logOut();
    this.loggedIn = "";
  }

  myPagePush(page) {
    console.log(page);
    this.navCtrl.navigateForward(page).then(result => {
      if (!result) {
        this.userService.displayAlert(
          "Sorry",
          "You must first register an account"
        );
      }
    });
  }
  // initialize firebase cloud messaging service
  initFcm() {
    this.fcm.onNotification().subscribe(data => {
      // track when device was closed and data was received in device tray
      if (data.wasTapped) {
        console.log(data);
        this.userService.displayAlert(data.title, data.content);
      } else {
        console.log(data);
        this.userService.displayAlert(data.title, data.content);
      }
    });
  }
}
