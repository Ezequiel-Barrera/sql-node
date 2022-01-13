import { IMesssage } from '../common/interfaces';
import knex, { Knex } from 'knex';
import dbConfig from './../knexfile';

class SqlLiteSb {
  public connection: Knex;
  public messages: IMesssage[];
  constructor() {
    const environment = 'local';
    const options = dbConfig[environment];
    this.connection = knex(options);
    this.messages = [
      { email: 'juan@gmail.com', text: '¡Bueno dias' },
      { email: 'pedro@gmail.com', text: 'Hola, todo bien?' },
      { email: 'ana@gmail.com', text: 'Buenas' },
    ];
  }

  init() {
    this.connection.schema.hasTable('mensajes').then((exists) => {
      if (!exists) {
        this.connection.schema
          .createTable('mensajes', (messagesTable) => {
            messagesTable.increments();
            messagesTable.string('email').notNullable();
            messagesTable.string('text').notNullable();
            messagesTable.timestamp('date').defaultTo(this.connection.fn.now());
          })
          .then(() => {
            this.create('mensajes', this.messages);
          });
      }
    });
  }

  get(tableName: string, id?: number) {
    if (id) return this.connection(tableName).where('id', id);
    return this.connection(tableName);
  }

  async create(tableName: string, data: IMesssage | IMesssage[]) {
    const newMessageId = await this.connection(tableName).insert(data);
    return this.get(tableName, newMessageId[0]);
  }
}

export const sqlLiteDbService = new SqlLiteSb();