import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
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

  constructor(private podcastService: PodcastsService) {
    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];
  }

  ngOnInit() {

    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];

  }
  // changepodcastLater(i) {
  //   localStorage.setItem('indexPodCastDetail', i);
  // }

}
