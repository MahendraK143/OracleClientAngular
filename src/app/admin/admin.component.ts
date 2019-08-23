import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userModel: any = {};
  public navStatus = true;
  constructor(private app: AppComponent,private productService:ProductService,private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/admin'],{queryParams:{'navStatus':false}});
    if (this.router.url == '/admin'){
      sessionStorage.setItem('navStatus','false');  
    } else {
      sessionStorage.setItem('navStatus','true');    
    }
  }
  setNavStatus(value:boolean){
    this.productService.setNavStatus(value);
  }

}
