import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inter-component',
  template: `
    {{ tempVar }}
    <!-- {{ myTask() }} -->
    `
})

export class InterpolationComponent implements OnInit {
  
  tempVar: string;
  i = 0;
  randomVar = Math.random();
  constructor() { 
    this.tempVar = "5";

  }

  ngOnInit() {
   // setInterval(() => {
   //   this.randomVar = Math.random()
  // },50)
  }

  public myTask() {
    
    console.log(`Called ${this.i++} times `)
  }
}
