import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  // podcasts = this.podcastService.podcasts;
  // podcastsHistory = this.podcastService.podcasts;
  
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
  // changepodcastHistory(i) {
  //   localStorage.setItem('indexPodCastDetail', i);
  // }

}
