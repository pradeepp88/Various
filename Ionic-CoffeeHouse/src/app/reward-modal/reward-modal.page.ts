import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-reward-modal",
  templateUrl: "./reward-modal.page.html",
  styleUrls: ["./reward-modal.page.scss"]
})
export class RewardModalPage implements OnInit {
  displayParam: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.displayParam = navParams.get("rewardParam");
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
