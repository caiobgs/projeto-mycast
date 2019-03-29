import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { LaterComponent } from './later/later.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FollowComponent } from './follow/follow.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'later', component: LaterComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'details', component: DetailComponent },

];



export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
