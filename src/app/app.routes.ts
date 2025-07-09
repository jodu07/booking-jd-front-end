import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
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
  {
    path: 'profile',
    loadComponent: () =>
      import('./user/profile-user/profile-user.component').then(
        (m) => m.ProfileUserComponent
      ),
    canActivate: [authGuard],
  },
  { path: 'sign', component: SignInComponent },
  { path: 'accountCreate', component: AccountCreateComponent },
];
