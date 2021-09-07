'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class LikePost extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', ['LikePostHook.sendWs', 'LikePostHook.notifyUser'])
    this.addHook('afterDelete', 'LikePostHook.sendWs')
  }


  user () {
    return this.belongsTo('App/Models/User')
  }

  post () {
    return this.belongsTo('App/Models/Post')
  }
}


module.exports = LikePost
