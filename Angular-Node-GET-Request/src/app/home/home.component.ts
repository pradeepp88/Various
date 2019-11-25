import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  players;
  constructor(private service: AppService) {

  }


  ngOnInit() {
    console.log('onInit()');
    this.service.getPlayers().subscribe(data => {
      console.log(data);
      this.players = data;
    })
  }

}
