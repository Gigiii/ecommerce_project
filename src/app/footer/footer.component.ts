import { GithubLogoComponent } from './../SVGs/github-logo/github-logo.component';
import { Component } from '@angular/core';
import { LogoSmallComponent } from '../SVGs/logo-small/logo-small.component';
import { InstagramLogoComponent } from '../SVGs/instagram-logo/instagram-logo.component';
import { YoutubeLogoComponent } from '../SVGs/youtube-logo/youtube-logo.component';
import { MastercardLogoComponent } from '../SVGs/mastercard-logo/mastercard-logo.component';
import { VisaLogoComponent } from '../SVGs/visa-logo/visa-logo.component';
import { AmexLogoComponent } from '../SVGs/amex-logo/amex-logo.component';
import { NewsletterRowComponent } from './newsletter-row/newsletter-row.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoSmallComponent,
            GithubLogoComponent,
            InstagramLogoComponent,
            YoutubeLogoComponent,
            MastercardLogoComponent,
            VisaLogoComponent,
            AmexLogoComponent,
            NewsletterRowComponent,
          ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
