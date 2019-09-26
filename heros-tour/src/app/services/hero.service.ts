import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { RepoService } from './repo.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService implements OnInit {

  constructor(
    private messageService: MessageService,
    private reposService: RepoService) { }

  getHeros(): Observable<Hero[]> {
    console.log('hero.service - getHeros called')
    this.messageService.add('HeroService: fetched heros')
    return of(HEROES);
  }

  ngOnInit(): void {
    
  }
  getRepos(): void {
    console.log('hero.service - getRepos called');
    this.reposService.fetchAll();
  }
}
