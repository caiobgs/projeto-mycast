import { Component, OnInit, Input } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  podcasts = this.podcastService.podcasts[0].episodes;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() {

  }
}
