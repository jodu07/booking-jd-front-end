import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { SignInComponent } from './entry/sign-in/sign-in.component';
import { AccountCreateComponent } from './entry/account-create/account-create.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [authGuard],
  },
  { path: 'profile', component: ProfileUserComponent },
  { path: 'sign', component: SignInComponent },
  { path: 'accountCreate', component: AccountCreateComponent },
];
