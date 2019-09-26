import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  public selectedHero: Hero;
  heroes:Hero[];
  constructor(private heroService: HeroService) { 

  }

  onSelect(hero: Hero): void {
    console.log('onSelect');
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {

    this.heroService.getHeros()
    .subscribe(heroes => this.heroes = heroes);

    this.heroService.getRepos()
  }
  onNotify(e): void {
    console.log('Click recieved in Parent control!');
  }
}
