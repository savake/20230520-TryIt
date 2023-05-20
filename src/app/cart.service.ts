import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
}) 
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  addToProduct(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItem() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>(
      './assets/shipping.json'
    );
  }
}