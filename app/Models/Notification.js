'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Notification extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'NotificationHook.sendWs')
  }


  user () {
    return this.belongsTo('App/Models/User')
  }
}


module.exports = Notification
