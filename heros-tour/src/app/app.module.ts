import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepoService } from './services/repo.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { InterpolationComponent } from './demo-examples/binding/interpolation.component';
import { OneWayBindingComponent } from './demo-examples/binding/oneway-binding-component';
import { TwoWayBindingComponent } from './demo-examples/binding/twoway-binding-component';
import { RemoveSpacesPipe } from './demo-examples/custom-pipes/remove-spaces.pipe';
import { InputFormatDirective } from './demo-examples/custom-directives/input-format.directive';
import { AttributeBindingComponent } from './demo-examples/attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './demo-examples/event-binding/event-binding.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

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
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
