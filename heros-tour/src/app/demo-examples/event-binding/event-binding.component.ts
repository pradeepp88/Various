import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  template: `
  <h2>Event Binding</h2>
  <input (keyup.enter)="onKeyUp()" />
  `
})
export class EventBindingComponent {

  constructor() { }
  //Event filtering - (keyup.enter)="onKeyUp()"
  onKeyUp() {
    console.log('ENTER pressed!');
  }
}
