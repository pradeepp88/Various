import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoway-binding-component',
  templateUrl: 'twoway-binding-component.html'
})

export class TwoWayBindingComponent implements OnInit {

    text: String;
    constructor() {

    }

    ngOnInit() {
        this.text = "loaded";
    }
    updateValue() : void {
    
        console.log('called');
    }
}