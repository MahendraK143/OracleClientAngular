import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OracleClient';
  aa = "active";
  public admin:AdminComponent;
  constructor(private productService:ProductService,private router: Router,private route: ActivatedRoute){

  }
  //public navStatus="true";
  ngOnInit(){
    
  }
  
  public navStatus = JSON.parse(sessionStorage.getItem('navStatus'));
  public username = sessionStorage.getItem('username');
  
}
