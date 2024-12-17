import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-github-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-logo.component.html',
  styleUrl: './github-logo.component.scss'
})
export class GithubLogoComponent {
  hoverClass: string = '';

  onMouseEnter() {
    this.hoverClass = 'hover';
  }

  onMouseLeave() {
    this.hoverClass = '';
  }
}
