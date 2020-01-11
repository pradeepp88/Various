import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, AlertController } from "@ionic/angular";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  reg = {
    email: "",
    passWrd1: "",
    passWrd2: ""
  };
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  ngOnInit() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Register Page");
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

  registerAccount() {
    if (this.reg.passWrd1 != this.reg.passWrd2) {
      this.displayAlert(
        "Password Problem!",
        "Passwords do not match, please try again."
      );
      this.reg.passWrd1 = "";
      this.reg.passWrd2 = "";
    } else {
      this.afAuth.auth
        .createUserWithEmailAndPassword(this.reg.email, this.reg.passWrd1)
        .then(res => this.regSuccess(res))
        .catch(err => this.displayAlert("Error!", err));
    }
  }

  regSuccess(result) {
    this.userService
      .logOn(this.reg.email, this.reg.passWrd1)
      .then(res => this.navCtrl.navigateForward("home"));
  }
}
