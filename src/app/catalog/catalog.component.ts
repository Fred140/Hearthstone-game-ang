import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Card, CARD_LIST, CARD_TYPES, DEFAULT_TYPE } from '../card';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardTypePipe } from "../card-type.pipe";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, CardTypePipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{

  public list:Card[] = [];
  public types:any[] = [];
  public currentType:string = DEFAULT_TYPE;
  public currentName:string = "";
  public currentDesc:string = "";

  constructor(private cardService:CardService){

  }
  ngOnInit(): void {
    this.cardService.getAll().subscribe(
      ( cards:Card[]) => {
         this.list = cards;
      }
    );

    this.cardService.getTypes().subscribe(
      (types:any[]) => {
        this.types = types;
      }
    );

    this.cardService.getDefaultType().subscribe(
      (type:string) => {
        this.currentType = type;
      }
    );
  }
}
