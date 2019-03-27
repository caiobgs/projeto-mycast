import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
@Component({
  selector: 'app-later',
  templateUrl: './later.component.html',
  styleUrls: ['./later.component.scss']
})
export class LaterComponent implements OnInit {

  podcastsLater = this.podcastService.podCastsLater;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() {
  }

}
