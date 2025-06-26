import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './navigation/navbar/nav/nav.component';
import { FooterComponent } from './navigation/navbar/nav/footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
/**
 * Home component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent,

    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Booking-jd-front-end';
}
