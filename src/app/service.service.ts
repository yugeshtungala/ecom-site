import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  img1='assets/app6.jpeg';
  img2='assets/app7.jpeg';
  img3='assets/app8.jpeg';
  img4='assets/appxr.jpeg';
  constructor() { }
  products=[
    {id:"m1",name:'apple iphone 6',price:2499,discount:0,image:this.img1,quantity:1},
    {id:"m2",name:'apple iphone 7 ',price:3599,discount:0,image:this.img2,quantity:1},
    {id:"m3",name:'apple iphone 8',price:4599,discount:0,image:this.img3,quantity:1},
    {id:"m4",name:'apple iphone 9',price:6599,discount:0,image:this.img4,quantity:1}
  ];
  cart={}
}
