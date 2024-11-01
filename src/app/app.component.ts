import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card, CARD_LIST, CARD_TYPES } from './card';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { CatalogComponent } from "./catalog/catalog.component";
import { NavbarComponent } from "./navbar/navbar.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, CatalogComponent, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
