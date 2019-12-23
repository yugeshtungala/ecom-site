import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
allproducts=[];
  constructor(private service:ServiceService) { }


  ngOnInit() {
    this.allproducts=this.service.products;
  }
  addtocart(product:any){

if(this.service.cart.hasOwnProperty(product.id)){
  this.service.cart[product.id].quantity += 1
}else{
this.service.cart[product.id]=product;
}
console.log(this.service.cart)
  }
 
 
}
