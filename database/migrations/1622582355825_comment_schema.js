'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()

      table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('post_id').notNullable().unsigned().references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')

      table.text('comment').notNullable()

      table.timestamps()
    })
  }


  down () {
    this.drop('comments')
  }
}


module.exports = CommentSchema
