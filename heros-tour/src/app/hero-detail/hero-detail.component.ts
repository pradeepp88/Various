import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input('sHero') hero: Hero;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

 
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log('Child control clicked');
    this.notify.emit('Click from nested component');

  }
}
