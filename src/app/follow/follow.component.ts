import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  
  podcasts = this.podcastService.podcasts;
  podcastsFollow = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() { }

    changepodcastFollow(i) {
      localStorage.setItem('indexPodCastDetail', i);
    }
}
