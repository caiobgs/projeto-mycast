import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';



const APP_ROUTES: Routes = [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'details', component: DetailComponent},
      {path: 'favorite', component: FavoriteComponent},
];



export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
