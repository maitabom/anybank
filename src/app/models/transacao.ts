import { nanoid } from 'nanoid';
import { TipoTransacao } from './tipo_transacao';

export class Transacao {
  readonly id = nanoid();
  readonly data = new Date();

  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}
