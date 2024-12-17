import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visa-logo',
  standalone: true,
  imports: [],
  templateUrl: './visa-logo.component.html',
  styleUrl: './visa-logo.component.scss'
})
export class VisaLogoComponent {
  @Input() isBlackAndWhite : boolean = false;

}
