import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
