import { PodcastsService } from './../podcasts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  podcasts = this.podcastService.podcasts;

  constructor(private podcastService: PodcastsService, public router: Router) { }

  ngOnInit() { }

  changepodcast(i) {
    localStorage.setItem('indexPodCastDetail', i);
    console.log( this.podcastService.podcasts[i]);
  }
  
}


