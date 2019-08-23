import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userModel: any = {};
  public navStatus = true;
  public userStatus;
  constructor(private router: Router,private productService: ProductService,private route:ActivatedRoute) { }
  ngOnInit() {
    //this.router.navigate(['/index'],{queryParams:{'navStatus':false}});
    if (this.router.url == '/index' || this.router.url == '/logout'){
      sessionStorage.setItem('navStatus','false');    
    } else {
      sessionStorage.setItem('navStatus','true');   
    }

  }
  onSubmit(){
    this.productService.validateUser(this.userModel).subscribe(data => {
      if (data) {
        sessionStorage.setItem('navStatus','true');   
        sessionStorage.setItem('username',this.userModel.username);   
        this.router.navigate(["/dashboard"]);
      } else {
        this.userStatus = "Please Enter Valid Username and Password."
      }
    });

  }
  
}
