import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private service:ServiceService, private rout:ActivatedRoute) { }
  alllaptops=[];
laptop={}
spec='';
  ngOnInit() {
    for(let lap in this.service.laptops){
    this.laptop[this.service.laptops[lap]['name']]=this.service.laptops[lap];
    }
    this.alllaptops=Object.values(this.laptop);
    this.rout.params.subscribe(s =>{
      if(Object.keys(s).length===0){
         this.spec=this.laptop['dell']['discription'];
      }else{
        this.spec=this.laptop[s.la]['discription'];
      }
   
    })
    console.log(this.laptop)

  }

}
