import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { IonicStorageModule } from "@ionic/storage";

import { RewardModalPageModule } from "./reward-modal/reward-modal.module";
// Firebase Cloud Messaging service
import { FCM } from "@ionic-native/fcm/ngx";

export const firebaseConfig = {
  apiKey: "AIzaSyAF31VyD7Vqu9NeO5eCI3b3vwL9v6o8wRM",
  authDomain: "wired-coffee-ecf85.firebaseapp.com",
  databaseURL: "https://wired-coffee-ecf85.firebaseio.com",
  storageBucket: "wired-coffee-ecf85.appsport.com",
  messagingSenderId: "331117188632"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FCM
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
