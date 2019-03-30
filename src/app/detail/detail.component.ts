import { Component, OnInit, Input } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  indexPodCastDetail;  
  indexPodCastFavoriteDetail;  
  podcasts;
  podcastsFavorite;
  
  constructor(private podcastService: PodcastsService) { }
  
  ngOnInit() {
  
    this.indexPodCastDetail = localStorage.getItem('indexPodCastDetail');
    this.indexPodCastFavoriteDetail = localStorage.getItem('indexPodCastFavoriteDetail');    
    this.podcasts = this.podcastService.podcasts[this.indexPodCastDetail];
    this.podcastsFavorite = this.podcastService.podcastsFavorite[this.indexPodCastFavoriteDetail];
  
  }
}
