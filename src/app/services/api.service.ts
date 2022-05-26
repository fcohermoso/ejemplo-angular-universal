import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL: string = 'http://localhost:4200/api'

  constructor(
    private http: HttpClient
  ) { }

  getDatosApi() {
    return this.http.get(this.URL + '/datos');
  }

  login(credenciales: any) {
    return this.http.post(this.URL + '/login', credenciales);
  }
}
