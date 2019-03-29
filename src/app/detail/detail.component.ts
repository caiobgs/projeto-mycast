import { Component, OnInit, Input } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idPodCast;
  constructor(private podcastService: PodcastsService) { }
  podcasts;
  ngOnInit() {
    this.idPodCast = localStorage.getItem('podCastId');
    this.podcasts = this.podcastService.podcasts[this.idPodCast];
  }
}
