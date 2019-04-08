import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
import { ShowPlayerService } from '../player/show-player.service';
@Component({
  selector: 'app-later',
  templateUrl: './later.component.html',
  styleUrls: ['./later.component.scss']
})
export class LaterComponent implements OnInit {

  // podcasts = this.podcastService.podcasts;
  // podcastsLater = this.podcastService.podcasts;
  indexPodCastDetail;
  podcasts;

  constructor(private podcastService: PodcastsService,
              private showPlayerService: ShowPlayerService) {
    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];
  }

  ngOnInit() {

    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];

  }

  exibePlayer(index) {
    this.showPlayerService.changeShowPlayer(true);
    this.podcastService.changeShowPodcast(this.podcasts.episodes[index]);
    localStorage.setItem('indexPodCastEpisode', index);
    console.log(index);
  }

}
