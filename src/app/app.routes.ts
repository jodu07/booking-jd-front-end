import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';

export const routes: Routes = [
  /* {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin/admin.component').then((m) => m.AdminComponent),
  },*/
  { path: '', component: ProfileUserComponent },
  { path: 'admin', component: AdminComponent },
];
