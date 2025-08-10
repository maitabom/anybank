import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-account',
  imports: [CurrencyPipe],
  templateUrl: './banner-account.component.html',
  styleUrl: './banner-account.component.css'
})
export class BannerAccountComponent {
  saldo = input.required<number>();
}
