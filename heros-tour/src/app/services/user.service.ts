
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:1337/api/users'

  constructor(private http: Http) { }

  getUsers() :Observable<any> {
    return this.http.get(this.userUrl);
  }
}

