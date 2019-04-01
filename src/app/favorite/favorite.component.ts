import { PodcastsService } from '../podcasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  
  podcasts = this.podcastService.podcasts;
  podcastsFavorite = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService) { }
  
  ngOnInit() { }

  changepodcastFavorite(i) {
    localStorage.setItem('indexPodCastDetail', i);
    console.log(i);
  }
}
