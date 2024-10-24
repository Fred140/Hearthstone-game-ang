import { CommonModule } from '@angular/common';
import { Card } from './../card';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public data:Card | null = null ;

  @Input()
  public flipped:boolean = false;


  @Input()
  public cardStyle:any ={};

  public imgStyle:any = {};

  constructor() {}

  toggleFlip() {
    this.flipped = !this.flipped;
      }

  ngOnInit(): void {

   // this.cardStyle = {
     // 'zoom': this.zoom
    //};

    this.imgStyle = {
      'background-image': 'url('+this.data?.img+')'
    };
  }

}
