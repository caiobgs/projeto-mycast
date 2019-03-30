import { PodcastsService } from '../podcasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  
  podcastsFavorite = this.podcastService.podcastsFavorite;

  constructor(private podcastService: PodcastsService) { }
  
  ngOnInit() { }

  changepodcastFavorite(i) {
    localStorage.setItem('indexPodCastFavoriteDetail', i);
  }
}
