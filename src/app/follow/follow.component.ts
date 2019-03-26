import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  podcastsFavorite = this.podcastService.podCastsFavorite;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() {
  }

}