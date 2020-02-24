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
img5='assets/mi.jpeg';

  mobiles={
    'redmi':{name:'redmi',price:9999,specification:'readmi is an emerging mobile phone brand which is committed to offering mobile phones with powerful performance, stylish design and sincere services.'
    ,image:this.img5},
    'samsung':{name:'samsung',price:1499,specification:'The samsung K20 and Redmi K20 Pro are flagship smartphones launched along with the Redmi 7A in China on May 28',image:this.img5},
    'nokia':{name:'nokia',price:19999,specification:'nokia helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more.',image:this.img5},
    'realme':{name:'realme',price:12999,specification:'realme is an emerging mobile phone brand which is committed to offering mobile phones with powerful performance, stylish design and sincere services.',image:this.img5}

  }
  img7='assets/apple.jpeg';
  laptops=[
    {name:'apple',price:129000,discription:'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',image:this.img7},
    {name:'dell',price:75499,discription:'Dell provides technology solutions, services & support. Buy Laptops, Touch Screen PCs, Desktops, Servers, Storage, Monitors, Gaming & Accessories.',image:this.img7},
    {name:'lennovo',price:35499,discription:'Lennovo With 8th gen Intel Core Processors. Laptops Designed to Deliver Performance with Style. Get Home Thin & Light, 8th gen Intel Core Powered Laptop with Looks & Exciting Features. ',image:this.img7},
    {name:'acer',price:29999,discription:'Acer product range includes laptop and desktop PCs, tablets, smartphones, monitors, projectors and cloud solutions for home users, business, government',image:this.img7}
  ]
  img8='assets/tv.jpeg';
  television=[
    {name:'mi',price:35999,specification:'Xiaomi India official store helps you to discover Mi Mobiles and accessories including ✓Redmi 8A ✓MI A3 ✓Redmi K20 Pro ✓Redmi K20 and ✓Mi Water Purifier',image:this.img8},
    {name:'kodak',price:25999,specification:'The Eastman Kodak Company is an American technology company that produces camera-related products with its historic basis on photography',image:this.img8},
    {name:'bpl',price:12999,specification:'British Physical Laboratories, doing business as BPL Ltd., is an Indian electronics company. ... After the 1982 Asian Games, BPL expanded its range further and manufactured colour televisions and video cassette recorders,',image:this.img8},
    {name:'lg',price:19999,specification:'LG Electronics Inc is a South Korean multinational electronics company headquartered in Yeouido-dong, Seoul, South Korea. LG Electronics is part of th',image:this.img8}
  ]

}
