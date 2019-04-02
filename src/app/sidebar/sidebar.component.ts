import { PodcastsService } from './../podcasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  podcasts = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() { }

  changepodcast(i) {
    localStorage.setItem('indexPodCastDetail', i);
    console.log( this.podcastService.podcasts[i]);
  }
}


