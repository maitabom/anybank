import { TipoTransacao } from './tipo_transacao';

export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}
