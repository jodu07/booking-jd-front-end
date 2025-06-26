import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileUserComponent },
];
