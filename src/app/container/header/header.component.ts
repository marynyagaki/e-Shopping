import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  ngOnInit() {
  
  }
  slogan:string='Your one stop shop for everything';
  source:string="/assets/shopping.jpg";
}

