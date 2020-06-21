import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dbKey: string = 'products';

  constructor() { }

  addProduct(product) {
    const products = this.getProduct();
    product.id = Date.now();
    products.push(product);
    this.updateProductLocalStorage(products);
  }

  getProduct(): any[] {
    return JSON.parse(localStorage.getItem(this.dbKey)) || [];
  }

  updateProductLocalStorage(products: any[]) {
    localStorage.setItem(this.dbKey, JSON.stringify(products));
  }

  deleteProduct(id) {
    const products = this.getProduct();
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
    this.updateProductLocalStorage(products);
  }
  getProductById(id) {
    const products = this.getProduct();
    return products.find((product) => product.id === id);
  }
  updateProduct(id, product) {
    const products = this.getProduct();
    const index = products.findIndex((product) => product.id === id);
    products[index] = product;
    this.updateProductLocalStorage(products);
  }
}
