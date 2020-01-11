import { Component, OnInit } from "@angular/core";
import { MenuService } from "../services/menu.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  myCoffee: any[] = [];

  constructor(private router: Router, public menuList: MenuService) {}

  ngOnInit() {
    this.grabMenu();
  }

  grabMenu() {
    this.menuList.getCafeDB().then(coffee => (this.myCoffee = coffee));
  }

  chooseCafe(id) {
    console.log(id);

    this.router.navigate(["menudetail", { id: id }]);
  }
}
