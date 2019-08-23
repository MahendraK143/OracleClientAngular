import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products;
  constructor(private _productService: ProductService,
    private router: Router) { }

ngOnInit() {
  this._productService.getAllBooks().subscribe(data => {
    this.products = data ;
  })
}
}
