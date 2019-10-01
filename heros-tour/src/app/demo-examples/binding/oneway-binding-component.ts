import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oneway-binding-component',
  templateUrl: 'oneway-binding-component.html'
})

export class OneWayBindingComponent implements OnInit {
  
  randomVar: String = "loaded"
  public bgColor: String = 'lightgray';

  constructor() { 
    this.myTask()
  }

  ngOnInit() {
      console.log('called');
  }

  myTask() : void {
    this.randomVar = ""
    setInterval(() => {
        this.randomVar = Math.random().toString()}, 500)
    }
   
   handleClick(): void {
        this.bgColor =  'blue';
       console.log('Button Clicked!')
   }
  }

