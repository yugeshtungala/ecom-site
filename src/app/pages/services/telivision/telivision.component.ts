import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telivision',
  templateUrl: './telivision.component.html',
  styleUrls: ['./telivision.component.css']
})
export class TelivisionComponent implements OnInit {
tv={};
alltv=[];
specs='';
  constructor(private servics:ServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
            for(let tel in this.servics.television){
            this.tv[this.servics.television[tel]['name']]=this.servics.television[tel]
           }

              this.alltv=this.servics.television;
              this.route.params.subscribe(y=>{

              if(Object.keys(y).length===0){
                    this.specs=this.tv['kodak']['specification'];
              }
              else{
                    this.specs=this.tv[y.t]['specification'];
              }
        })

  
  }

}
