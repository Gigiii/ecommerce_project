import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-small',
  standalone: true,
  imports: [],
  templateUrl: './logo-small.component.html',
  styleUrl: './logo-small.component.scss'
})
export class LogoSmallComponent {
  @Input() width: string = '44';
  @Input() height: string = '44';
  @Input() strokeColor: string = '#E6E7E8';
  @Input() fillColor: string = '#0E1422';
}
