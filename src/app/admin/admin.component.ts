import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isAuthenticated:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e: NavigationEnd) => e instanceof NavigationEnd)
    ).subscribe((e:NavigationEnd) => {
      console.log(e);
      this.isAuthenticated = (e.urlAfterRedirects !==  '/admin' && e.urlAfterRedirects !== '/admin/register');
    })
  }

}
