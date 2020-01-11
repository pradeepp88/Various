import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"]
})
export class AccountPage implements OnInit {
  public accountUser: string;
  public userInfo: any[] = [];
  public rewardInfo: any[] = [];

  constructor(
    public navCtrl: NavController,
    private userService: UserService
  ) {}

  // ionic route gaurd, to prevent users from viewing
  // if not logged in..
  ionViewCanEnter(): boolean {
    return this.userService.success;
  }
  ngOnInit() {
    this.accountUser = this.userService.user;

    this.userService.storageControl("get", this.accountUser).then(userData => {
      console.log(userData);
      this.userInfo = userData;
    });

    this.userService
      .storageControl("get", `${this.accountUser}`)
      .then(rewardData => {
        console.log(rewardData);
        this.rewardInfo = rewardData;
      });
  }
}
