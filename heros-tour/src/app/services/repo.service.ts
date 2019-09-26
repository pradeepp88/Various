
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

// The Injectable decorator is required for dependency injection to work
@Injectable() export class RepoService{
  repoImgs:[string];
  constructor(private http: Http){
  }

  fetchAll(){
    console.log('fetchAll called');
    return this.http.get('https://api.github.com/repositories')
    .subscribe(result => {
      console.log(result);
    });
  }
}

