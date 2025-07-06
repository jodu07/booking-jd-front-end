import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Customer } from 'src/models/customer';

/**
 * Top-nav component.
 */
@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  /** Customer logged.*/
  loggedCustomer!: Customer | null;
  /** User Logged.*/
  loggedUser = false;

  constructor(private router: Router, private authService: AuthService) {}

  /** Initial method.*/
  ngOnInit(): void {
    this.authService.getCustomerObservable().subscribe((customer) => {
      this.loggedCustomer = customer;
      if (customer) {
        this.loggedCustomer = customer;
        this.loggedUser = true;
      }
    });
  }

  /**
   * Go to page selected.
   * @param rute The rute.
   */
  goToPage(rute: string) {
    this.router.navigate([rute]);
  }

  /**
   * Logout.
   */
  logout() {
    this.authService.logout();
    this.loggedUser = false;
  }
}
