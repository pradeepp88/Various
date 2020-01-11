import { Component, OnInit } from "@angular/core";
import { MenuService } from "../services/menu.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu-detail",
  templateUrl: "./menu.detail.page.html",
  styleUrls: ["./menu.detail.page.scss"]
})
export class MenuDetailPage implements OnInit {
  theCoffee = {
    id: "",
    name: "",
    description: "",
    img: "",
    small: 0,
    medium: 0,
    large: 0,
    size: "",
    price: 0,
    milk: "none",
    whip: "none"
  };

  constructor(private route: ActivatedRoute, public menuList: MenuService) {}

  ngOnInit() {
    debugger;
    let id = this.route.snapshot.params.id;
    console.log(`menu id : ${id}`);
    this.menuList.getOne(id).then(ret => this.initObject(ret));
  }

  initObject(myData) {
    this.theCoffee.id = myData.id;
    this.theCoffee.name = myData.name;
    this.theCoffee.description = myData.description;
    this.theCoffee.img = myData.img;
    this.theCoffee.small = myData.small;
    this.theCoffee.medium = myData.medium;
    this.theCoffee.large = myData.large;
    this.theCoffee.price = myData.small;
  }

  addToCart() {
    if (this.theCoffee.price == this.theCoffee.small) {
      this.theCoffee.size = "small";
    } else if (this.theCoffee.price == this.theCoffee.medium) {
      this.theCoffee.size = "medium";
    } else {
      this.theCoffee.size = "large";
    }

    console.log("clicked", this.theCoffee);
  }
}
