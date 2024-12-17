import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mastercard-logo',
  standalone: true,
  imports: [],
  templateUrl: './mastercard-logo.component.html',
  styleUrl: './mastercard-logo.component.scss'
})
export class MastercardLogoComponent {
  @Input() isBlackAndWhite : boolean = false;
}
