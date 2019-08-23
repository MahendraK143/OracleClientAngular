import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any = {};
  public API = '//localhost:8082';
  public STOCK_API = this.API + '/stock-list';
  constructor(private http:HttpClient) { }
  public navStatus;
  getAllBooks(){
    this.products = this.http.get(this.API+"/getAllProducts");
    return this.products;
  }
  setNavStatus(value:Boolean){
    //alert(value);
    this.navStatus = value;
  }
  getNavStatus(){
    //alert(this.navStatus);
    return this.navStatus;
  }
  validateUser(user:any){
    alert(user.username);
    return this.http.get(this.API+"/validateUser",{params:{'username':user.username,'password':user.password}});
  }
}
