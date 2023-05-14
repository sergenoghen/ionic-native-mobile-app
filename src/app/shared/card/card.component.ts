import { Component, Input, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { personne, Personne, Personnes } from 'src/app/interfaces/datatest';
import * as $ from 'jquery';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() contenu = new Personnes();
  idParam = 0 ;
  msg = '';
  constructor(
    private router : Router,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('idCard')!;
      
      if(id  ){
        let idNum = parseInt(id);
        if(isNaN(idNum) ) {
          this.msg = 'No data found';
        console.log(idNum);
        }else{
          this.contenu = Personne.filter(pers=>
            pers.id == idNum
          )[0];
          if(this.contenu instanceof Personnes){
            console.log('allo');
          }else{
            console.log('alliiiiiiiiio');
          }
        }

        
        
      }

  }

  goToCard(id:number){
   
    $('.gotoCard').hide(300)
    
    this.idParam = id;
    return this.router.navigateByUrl('tabs/tab1/card/'+ id);
  }
  /*objs = [
    {
      id:1,
      name:'Dodo',
      surname:'Dodos',
      age:10,
      city:'Venise'
    },
    {
      id:2,
      name:'abba',
      surname:'abbas',
      age:40,
      city:'Montreal'
    },
    {
      id:3,
      name:'hopo',
      surname:'hopos',
      age:55,
      city:'Chicago'
    },
    {
      id:4,
      name:'datop',
      surname:'datops',
      age:75,
      city:'London'
    },
  ]*/
}
