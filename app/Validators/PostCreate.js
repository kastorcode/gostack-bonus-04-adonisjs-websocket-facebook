'use strict'


class PostCreate {
  get validateAll () {
    return true
  }


  get rules () {
    return {
      content: 'required|string|min:1'
    }
  }
}


module.exports = PostCreate
