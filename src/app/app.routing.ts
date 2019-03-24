import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailComponent },
  { path: 'services', component: DetailComponent },
  { path: 'clients', component: DetailComponent },
  { path: 'contact', component: DetailComponent },

];



export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
