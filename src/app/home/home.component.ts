import { PodcastsService } from './../podcasts.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  podcasts = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() { }

  changepodcast(i) {
    localStorage.setItem('indexPodCastDetail', i);
  }

}
