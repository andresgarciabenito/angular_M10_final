import { Component, OnInit } from '@angular/core';
import { Team2019Service } from './../team2019.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  team:any[] = [];

  constructor(private _servicio:Team2019Service) { 
    this.team = _servicio.getTeam();
  }
  

  ngOnInit(): void {
  }

}
