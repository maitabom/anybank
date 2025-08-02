import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-welcome',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './banner-welcome.component.html',
  styleUrl: './banner-welcome.component.css'
})
export class BannerWelcomeComponent {
  currentDate = new Date();
}
