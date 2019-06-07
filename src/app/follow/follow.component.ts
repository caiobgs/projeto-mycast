import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  
  podcasts = this.podcastService.podcasts;
  podcastsFollow;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() { 
    this.podcastService.getPodCastFollow().subscribe((data)=> {
            this.podcastsFollow = data;
    })
  }

    changepodcastFollow(i) {
      localStorage.setItem('indexPodCastDetail', i);
    }
}
