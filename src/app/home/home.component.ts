import { PodcastsService } from './../podcasts.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  podcasts = '';

  constructor(private podcastService: PodcastsService) { }

  ngOnInit() {
    this.podcastService.getPodCast('podcast').subscribe((data: any) => {
      console.log(data.results);
      this.podcasts = data.results;
    });
  }

  changepodcast(i) {
    localStorage.setItem('indexPodCastDetail', i);

  }
}
