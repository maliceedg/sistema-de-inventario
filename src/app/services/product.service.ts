import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = 'http://localhost:8000/products/';
    return this.http.get(url);
  }

  createProduct(product) {
    const url = 'http://localhost:8000/products/';
    return this.http.post(url, product);
  }

  deleteProduct(id) {
    const url = `http://localhost:8000/products/${id}`;
    return this.http.delete(url, id);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
