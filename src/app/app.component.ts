import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNewTransactionComponent } from './components/form-new-transaction/form-new-transaction.component';
import { Transacao } from './models/transacao';
import { TipoTransacao } from './models/tipo_transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          acc = acc + transacao.valor;
          break;
        case TipoTransacao.SAQUE:
          acc = acc - transacao.valor;
          break;
      }

      return acc;
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((lista) => [transacao, ...lista]);
  }
}
