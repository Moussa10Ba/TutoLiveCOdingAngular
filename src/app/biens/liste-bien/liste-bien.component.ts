import { Component, OnInit } from '@angular/core';
import {Bien} from '../bien'
@Component({
  selector: 'app-liste-bien',
  templateUrl: './liste-bien.component.html',
  styleUrls: ['./liste-bien.component.css']
})
export class ListeBienComponent implements OnInit {

  biens: Bien[];

  constructor() {
    this.biens=[
      {id:1,
       title:"Voiture",
       descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
       price:400000,
       image:'https://source.unsplash.com/1080x780/?computer,home',
       state:1,
       category:"Immobilier",
       sale:true,
       creAte:new Date(2019,12,20,15,34)
      },
      {id:2,
        title:"Money",
        descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        price:400000,
        image:'https://source.unsplash.com/1080x780/?money,home',
        state:1,
        category:"Immobilier",
        sale:true,
        creAte:new Date(2019,12,20,15,34)
      },
      {id:3,
        title:"Voiture",
        descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        price:400000,
        image:'https://source.unsplash.com/1080x780/?computer,home',
        state:1,
        category:"Immobilier",
        sale:true,
        creAte:new Date(2019,12,20,15,34)
       },
       {id:4,
        title:"Voiture",
        descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        price:400000,
        image:'https://source.unsplash.com/1080x780/?computer,home',
        state:1,
        category:"Commerce",
        sale:true,
        creAte:new Date(2019,12,20,15,34)
       }
    ]
  }

  ngOnInit(): void {
  }

}
