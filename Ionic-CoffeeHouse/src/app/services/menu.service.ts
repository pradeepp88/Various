import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  cafe: any[] = [
    {
      id: "cof",
      Name: "Coffee",
      Description: "The classic standard, our exclusive select blend",
      img: "assets/img/coffee.jpg",
      small: 1.5,
      medium: 2.5,
      large: 3.25
    },

    {
      id: "lat",
      Name: "Latte",
      Description: "A blend of expresso, steam milk, and foam",
      img: "assets/img/latte.jpg",
      small: 2.0,
      medium: 3.0,
      large: 3.75
    },

    {
      id: "moc",
      Name: "Mocha",
      Description: "Expresso, melted chocolate, and steamed milk",
      img: "assets/img/mocha.jpg",
      small: 2.3,
      medium: 3.15,
      large: 4.0
    },

    {
      id: "esp",
      Name: "Expresso",
      Description: "The classic expresso",
      img: "assets/img/expresso.jpg",
      small: 1.75,
      medium: 2.5,
      large: 3.5
    }
  ];

  constructor() {}

  getCafeDB() {
    return Promise.resolve(this.cafe);
  }

  getOne(search) {
    let tmp = this.cafe.map(x => x.id).indexOf(search);
    let single = this.cafe[tmp];
    return Promise.resolve(single);
  }
}
