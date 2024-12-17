import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-logo.component.html',
  styleUrl: './instagram-logo.component.scss'
})
export class InstagramLogoComponent {
  hoverClass: string = '';

  onMouseEnter() {
    this.hoverClass = 'hover';
  }

  onMouseLeave() {
    this.hoverClass = '';
  }

}
