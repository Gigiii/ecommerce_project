import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amex-logo',
  standalone: true,
  imports: [],
  templateUrl: './amex-logo.component.html',
  styleUrl: './amex-logo.component.scss'
})
export class AmexLogoComponent {
  @Input() isBlackAndWhite : boolean = false;

}
