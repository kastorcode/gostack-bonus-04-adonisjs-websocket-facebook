'use strict'


class UserUpdate {
  get validateAll () {
    return true
  }


  get rules () {
    return {
      username: 'unique:users',
      email: 'email|unique:users',
      password: 'confirmed'
    }
  }
}


module.exports = UserUpdate
