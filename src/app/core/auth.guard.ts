import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = !!authService.getCustomer();

  if (!isAuthenticated) {
    router.navigate(['/sign']);
    return false;
  }

  return true;
};
