import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public list:Card[] = [];

  constructor(){
     this.list.push(
      {
          id: 1,
          name:"Dragon blanc aux yeux bleus",
          desc:"Il est puissant",
          cost: 9,
          atk: 9,
          def: 9,
          price: 1600,
          img: "/Dragon.JPG"
      },
      {
        id: 2,
        name:"Génie de lampe",
        desc:"Je suis ton meilleur ami.",
        cost: 8,
        atk: 8,
        def: 8,
        price: 1100,
        img: "/Génie.JPG"
      }
    );
  }
}
