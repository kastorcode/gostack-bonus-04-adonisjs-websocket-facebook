'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class NotificationSchema extends Schema {
  up () {
    this.create('notifications', (table) => {
      table.increments()

      table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

      table.text('content').notNullable()

      table.timestamps()
    })
  }


  down () {
    this.drop('notifications')
  }
}


module.exports = NotificationSchema
