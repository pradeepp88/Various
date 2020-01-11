import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardModalPageRoutingModule } from './reward-modal-routing.module';

import { RewardModalPage } from './reward-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardModalPageRoutingModule
  ],
  declarations: [RewardModalPage]
})
export class RewardModalPageModule {}
