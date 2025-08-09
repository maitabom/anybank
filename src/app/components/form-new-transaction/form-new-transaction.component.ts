import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css',
})
export class FormNewTransactionComponent {
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output();

  onSubmit() {
    this.transacaoCriada.emit();

    this.tipoTransacao = '';
    this.valorTransacao = '';
  }
}
