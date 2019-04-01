import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
@Component({
  selector: 'app-later',
  templateUrl: './later.component.html',
  styleUrls: ['./later.component.scss']
})
export class LaterComponent implements OnInit {

  podcasts = this.podcastService.podcasts;
  podcastsLater = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() { }

  changepodcastLater(i) {
    localStorage.setItem('indexPodCastDetail', i);
  }

}
