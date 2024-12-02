import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  ngOnInit(){

  }
  products=[
    {id:1,name:'Dress',price:'sh.500',color:'white',available:'available',image:'/assets/image.png'},
    {id:1,name:'Sweat shirt',price:'sh.700',color:'black',available:'available',image:'/assets/sweatshirt.jpg'},
    {id:1,name:'Vans shoes',price:'sh1299',color:'purple',available:'available',image:'/assets/vans.jpg'},
    {id:1,name:'Apple watch',price:'sh.1379',color:'maroon',available:' Not available',image:'/assets/apple.jpg'},
    {id:1,name:'Purse',price:'sh.267',color:'pink',available:'available',image:'/assets/purse.jpg'},
    {id:1,name:'Fan',price:'sh.850',color:'dark green',available:'Not available',image:'/assets/fan.jpg'}


  ]

}
