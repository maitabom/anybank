import { Component } from '@angular/core';
import { BannerWelcomeComponent } from '../banner-welcome/banner-welcome.component';
import { BannerAccountComponent } from '../banner-account/banner-account.component';

@Component({
  selector: 'app-banner',
  imports: [BannerWelcomeComponent, BannerAccountComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {}
