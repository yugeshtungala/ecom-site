import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
allmobiles=[];
specs='';
  constructor(private service:ServiceService,private rout:ActivatedRoute) { }
  ngOnInit() {
    this.allmobiles=Object.values(this.service.mobiles);
    this.rout.params.subscribe(p =>{
      if(Object.keys(p).length===0){
        this.specs=this.service.mobiles['realme']['specification'];

      }else{
        this.specs=this.service.mobiles[p.se]['specification'];
      }
    })

  }

}
