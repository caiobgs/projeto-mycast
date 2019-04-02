import { Component, OnInit, Input } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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
}
