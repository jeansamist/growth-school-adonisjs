import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cover: string

  @column()
  declare file_path: string

  @column()
  declare description: string

  @column()
  declare discount_percentage?: number

  @column()
  declare average_rate: number

  @column()
  declare title: string

  @column()
  declare price: number

  @column()
  declare tags: { name: string; id: number }[]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
