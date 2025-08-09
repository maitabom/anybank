import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transacao } from '../../models/transacao';
import { TipoTransacao } from '../../models/tipo_transacao';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css',
})
export class FormNewTransactionComponent {
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output<Transacao>();

  onSubmit() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = '';
    this.valorTransacao = '';
  }
}
