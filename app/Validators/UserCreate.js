'use strict'


class UserCreate {
  get validateAll () {
    return true
  }


  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}


module.exports = UserCreate
