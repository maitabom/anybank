import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNewTransactionComponent } from './components/form-new-transaction/form-new-transaction.component';
import { Transacao } from './models/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  processarTransacao(transacao: Transacao) {}
}
