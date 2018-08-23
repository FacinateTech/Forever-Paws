import db from '../index';

const Console = console;

db.knex.schema.hasTable('media').then(
  exists =>
    exists ||
    db.knex.schema
      .createTable('media', media => {
        media.increments('id').primary();
        media.integer('petId');
        media.string('link');
      })
      .then(table => `Media Table Created: ${Console.log(table)}`)
);

export default db.model('Media', db.Model.extend({ tableName: 'media' }));
