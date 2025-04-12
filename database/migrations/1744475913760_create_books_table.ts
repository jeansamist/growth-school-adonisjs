import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cover')
      table.string('file_path')
      table.float('discount_percentage').nullable()
      table.float('average_rate').notNullable()
      table.string('title').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.json('tags').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
