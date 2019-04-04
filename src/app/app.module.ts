import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { MiniatureComponent } from './miniature/miniature.component';
import { routing } from './app.routing';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HistoryComponent } from './history/history.component';
import { LaterComponent } from './later/later.component';
import { FollowComponent } from './follow/follow.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    MiniatureComponent,
    DetailComponent,
    FavoriteComponent,
    HistoryComponent,
    LaterComponent,
    FollowComponent,
    ConfigurationComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
