import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private JWT_KEY: string = 'jwt';
  isLoggedIn$ = new BehaviorSubject(this.getToken());

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.JWT_KEY, token);
    this.isLoggedIn$.next(token);
  }

  getToken() {
    return localStorage.getItem(this.JWT_KEY);
  }

  delToken() {
    localStorage.removeItem(this.JWT_KEY);
    this.isLoggedIn$.next(null);
  }


}
