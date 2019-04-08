import { Component, OnInit } from '@angular/core';
import { ShowPlayerService } from './show-player.service';
import { PodcastsService } from '../podcasts.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  showPlayer: boolean;
  indexPodCastEpisode;
  podcasts;

  constructor( private showPlayerService: ShowPlayerService,
               private podcastService: PodcastsService) {
                this.showPlayerService.showPlayerCurrent.subscribe(showPlayer => this.showPlayer = showPlayer);
                this.podcastService.showPodcastCurrent.subscribe(showPodcast => this.podcasts = showPodcast);
                this.indexPodCastEpisode = localStorage.getItem('indexPodCastEpisode');
                this.podcasts = this.podcastService.podcasts[this.indexPodCastEpisode];
                console.log('teste');
   }

  ngOnInit() {

  }

  closePlayer(){
    this.showPlayerService.changeShowPlayer(false);
  }



}
