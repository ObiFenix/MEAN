import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getProducts(){
    return this._http.get('/products');
  }
  getProduct(id){
    return this._http.get(`/products/edit/${id}`);
  }
  editProduct(product: Object){
    return this._http.post(`/products/edit/${product['_id']}`,product);
  }
  addProduct(product: Object){
    return this._http.post('products/add', product);
  }
  deleteProduct(id:String){
    return this._http.get(`products/delete/${id}`);
  }
}