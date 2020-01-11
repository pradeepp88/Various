import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  login = {
    email: "",
    passWrd: ""
  };

  constructor(
    public navCtrl: NavController,
    private userService: UserService
  ) {}

  ngOnInit() {}

  signOn() {
    if (!this.login.email || !this.login.passWrd) {
      this.userService.displayAlert(
        "Error !",
        "You must enter email and password"
      );
    } else {
      this.userService
        .logOn(this.login.email, this.login.passWrd)
        .then(returned => {
          if (this.userService.success) {
            this.navCtrl.navigateForward("home");
          } else {
            this.login.email = "";
            this.login.passWrd = "";
          }
        });
    }
  }
}
