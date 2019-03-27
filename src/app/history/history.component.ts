import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  podcastsHistory = this.podcastService.podCastsHistory;

  constructor (private podcastService: PodcastsService) { }

  ngOnInit() {
  }

}
