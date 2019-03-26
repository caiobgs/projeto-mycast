import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  
  podcastsFavorite = this.podcastService.podCastsFavorite;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() {
  }

}
