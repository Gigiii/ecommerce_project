import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-logo.component.html',
  styleUrl: './youtube-logo.component.scss'
})
export class YoutubeLogoComponent {
  hoverClass: string = '';

  onMouseEnter() {
    this.hoverClass = 'hover';
  }

  onMouseLeave() {
    this.hoverClass = '';
  }
}
