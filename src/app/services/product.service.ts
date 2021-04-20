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
    const url = 'https://sistema-de-inventario-api.herokuapp.com/products';
    return this.http.get(url);
  }

  createProduct(product) {
    const url = 'https://sistema-de-inventario-api.herokuapp.com/products';
    return this.http.post(url, product);
  }

  deleteProduct(id) {
    const url = `https://sistema-de-inventario-api.herokuapp.com/products/${id}`;
    return this.http.delete(url, id);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
