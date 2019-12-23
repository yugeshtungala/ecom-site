import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
mycart=[];
total=0;
  constructor(private service:ServiceService) { }


  ngOnInit() {
    this.mycart = Object.values(this.service.cart);
   this.getTotal()
 
}
inc(item:any){
  this.service.cart[item.id].quantity+=1
  this.mycart=Object.values(this.service.cart);
  this.getTotal()

}
dec(item:any){
  if(this.service.cart[item.id].quantity>1){
    this.service.cart[item.id].quantity-=1
  }else{
    delete this.service.cart[item.id];
  }
  this.mycart=Object.values(this.service.cart);
  this.getTotal()
}
getTotal(){
 this.total=0;
 for(let i=0 ; i<this.mycart.length;i++){
   this.total += this.mycart[i].price*this.mycart[i].quantity
 }
}


}