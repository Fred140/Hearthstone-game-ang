export class Card {
  public id:number = 0;
  public name:string = "";
  public img:string = "";
  public desc:string = "";
  public cost:number = 0;
  public atk:number = 0;
  public def:number = 0;
  public price:number = 0;
  public type:string = "";
}

export const DEFAULT_TYPE:string = "";

export const CARD_TYPES:any[] = [
    {type: "", name:"Tous"},
    {type: "dragon", name:"Dragon"},
    {type: "djin", name:"Djin"},
    {type: "sorcier", name:"Sorcier"},
    {type: "sort", name:"Sort"},
    {type: "guerrier", name:"Guerrier"},
]

export const CARD_LIST:Card[] = [
  {
    id: 1,
    name:"Dragon blanc aux yeux bleus",
    desc:"Il est puissant",
    cost: 9,
    atk: 9,
    def: 9,
    price: 1600,
    type:"dragon",
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
  type:"djin",
  img: "/Génie.JPG"
},
{
  id: 3,
  name:"Kul Tiran Chaplain",
  desc:"Donne un minion",
  cost: 2,
  atk: 2,
  def: 3,
  price: 800,
  type:"sorcier",
  img: "/Sorcier.JPG"
},
{
  id: 4,
  name:"Fureur du dragon",
  desc:"Inflige des dégats",
  cost: 5,
  atk: 8,
  def: 0,
  price: 500,
  type:"sort",
  img: "/sortdragon.JPG"
},
{
  id: 5,
  name:"Garruk",
  desc:"Guerrier puissant",
  cost: 5,
  atk: 9,
  def: 6,
  price: 1050,
  type:"guerrier",
  img: "/Guerrier.JPG"
}
]
