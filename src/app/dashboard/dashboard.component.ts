import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public navStatus = true;
  public username = sessionStorage.getItem('username');
  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/dashboard'],{queryParams:{'navStatus':false}});
    if (this.router.url == '/admin' || this.router.url == '/index'){
      sessionStorage.setItem('navStatus','false');
    } else {
      sessionStorage.setItem('navStatus','true');  
    }
  }

}
