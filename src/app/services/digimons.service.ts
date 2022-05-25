import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface IDigimon {
  img: string;
  name: string;
  level: string;
}

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  private URL: string = 'https://digimon-api.vercel.app/api/digimon';

  constructor(
    private http: HttpClient
  ) { }

  getDigimons(): Observable<IDigimon[]> {
    return this.http.get<IDigimon[]>(this.URL);
  }

  getDigimonsByLevel(level: string): Observable<IDigimon> {
    return this.http.get<IDigimon>(`${this.URL}/level/${level}`);
  }

  getDigimonsByName(name: string): Observable<IDigimon> {
    return this.http.get<IDigimon[]>(`${this.URL}/name/${name}`)
      .pipe(
        map((digimons: any[]) => digimons.pop())
      );
  }

}
