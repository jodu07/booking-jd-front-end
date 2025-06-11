import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
/**
 * Nav component.
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, TopNavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
