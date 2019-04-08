import { Component, OnInit } from '@angular/core';
import { ShowPlayerService } from './show-player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  showPlayer: boolean;

  constructor( private showPlayerService: ShowPlayerService) {

   }

  ngOnInit() {
    this.showPlayerService.showPlayerCurrent.subscribe(showPlayer => this.showPlayer = showPlayer);
  }



}
