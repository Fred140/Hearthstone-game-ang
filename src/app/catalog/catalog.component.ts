import { Component } from '@angular/core';
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
export class CatalogComponent {

  public list:Card[] = [];
  public types:any[] = [];
  public currentType:string = DEFAULT_TYPE;
  public currentName:string = "";
  public currentDesc:string = "";

  constructor(){
    this.list = CARD_LIST;
    this.types = CARD_TYPES;
  }
}
