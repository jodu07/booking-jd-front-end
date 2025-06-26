import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';

export const routes: Routes = [
  { path: '', component: ProfileUserComponent },
  { path: 'admin', component: AdminComponent },
];
