import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'cardType',
  standalone: true
})
export class CardTypePipe implements PipeTransform {
  // type "spécial", qui nous permet d'avoir l'ensemble des cartes
  // visibles
  transform(cards: Card[], type:string = ""): Card[] {
    if(type === "")
      return cards;

    const results:Card[] = cards.filter(
  (value:Card) => {
    return value.type.includes(type);
  }
  );

  return results;
}

}
