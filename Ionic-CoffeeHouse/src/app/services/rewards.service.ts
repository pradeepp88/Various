import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
//import { Promise } from "promise-polyfill";

import { Storage } from "@ionic/storage";

import { ModalController } from "@ionic/angular";
import { RewardModalPage } from "../reward-modal/reward-modal.page";

@Injectable({
  providedIn: "root"
})
export class RewardsService {
  constructor(private storage: Storage, public modalCtrl: ModalController) {}

  rewards: any[] = [];

  // reward values
  list: any[] = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 0.25, 0.5, 0.75];

  rewardsCheck(user, userData) {
    return new Promise((resolve, reject) => {
      userData.logins += 1;
      if (userData.logins == 2) {
        let firstReward = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = firstReward;
        resolve(userData);
      } else if (userData.logins % 10 == 0) {
        let newCount = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = newCount;
        resolve(userData);
      } else {
        resolve(userData);
      }
    });
  }

  rewardChance(user, count) {
    if (count == 0) {
      count++;
      this.generateReward(user, count);
      return count;
    } else {
      let chance = Math.floor(Math.random() * 100 + 1);

      if (chance > 50) {
        this.generateReward(user, count);
        return count;
      } else {
        return count;
      }
    }
  }

  generateReward(user, count) {
    let dex = Math.floor(Math.random() * 10);
    let rewarded = this.list[dex];

    let rewardObj = {
      rewardId: `REW-${count}`,
      amount: rewarded
    };

    debugger;
    this.storage.get(`${user}-rewards`).then(returned => {
      //if (!returned) {
      if (true) {
        this.rewards.push(rewardObj);
        this.storage
          .set(`${user}-rewards`, this.rewards)
          .then(res => this.displayReward(rewarded));
      } else {
        this.rewards = returned;
        this.rewards.push(rewardObj);
        this.storage
          .set(`${user}-rewards`, this.rewards)
          .then(res => this.displayReward(rewarded));
      }
    });
  }

  async displayReward(amount) {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: RewardModalPage,
      componentProps: {
        rewardParm: amount
      }
    });
    await modal.present();
  }
}
