'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class LikePostSchema extends Schema {
  up () {
    this.create('like_posts', (table) => {
      table.increments()

      table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('post_id').notNullable().unsigned().references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')

      table.timestamps()
    })
  }


  down () {
    this.drop('like_posts')
  }
}


module.exports = LikePostSchema
