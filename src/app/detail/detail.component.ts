import { Component, OnInit, Input } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
import { ShowPlayerService } from '../player/show-player.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  indexPodCastDetail;
  indexPodCastDetailService;
  podcasts;

  constructor(private podcastService: PodcastsService,
              private showPlayerService: ShowPlayerService) {
  }

  ngOnInit() {
    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];
    this.podcastService.showPodcastCurrent.subscribe(showPodCast => this.podcasts = showPodCast);
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];
  }

  exibePlayer(index) {
    this.showPlayerService.changeShowPlayer(true);
    this.podcastService.changeShowPodcast(this.podcasts.episodes[index]);
    localStorage.setItem('indexPodCastEpisode', index);
    console.log(index);
  }

}
