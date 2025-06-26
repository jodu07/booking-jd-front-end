import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
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
  constructor(private router: Router) {}
  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  goToProfileUser() {
    this.router.navigate(['/profile']);
  }
}
