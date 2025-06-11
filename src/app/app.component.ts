import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './navigation/navbar/nav/nav.component';
/**
 * Home component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'booking-jd-front-end';
}
