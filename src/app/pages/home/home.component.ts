import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  open = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
    console.log("toggled")
  }

  changeRoute(route:string){
    this.open = false;
    this.router.navigate([`/${route}`]);
  }


}
