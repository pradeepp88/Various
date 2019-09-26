import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HerosComponent } from "./heros/heros.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

import { InterpolationComponent } from "./binding/interpolation.component";
import { OneWayBindingComponent } from "./binding/oneway-binding-component";
import { TwoWayBindingComponent } from "./binding/twoway-binding-component";
import { RemoveSpacesPipe } from "./custom-pipes/remove-spaces.pipe";
import { InputFormatDirective } from "./custom-directives/input-format.directive";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { MessagesComponent } from "./messages/messages.component";

import { RepoService } from "./services/repo.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    InterpolationComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    RemoveSpacesPipe,
    InputFormatDirective,
    AttributeBindingComponent,
    EventBindingComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
