import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-welcome',
  imports: [DatePipe],
  templateUrl: './banner-welcome.component.html',
  styleUrl: './banner-welcome.component.css'
})
export class BannerWelcomeComponent {
  currentDate = new Date();
}
