'use strict'


class PostUpdate {
  get validateAll () {
    return true
  }


  get rules () {
    return {
      content: 'required|string|min:1'
    }
  }
}


module.exports = PostUpdate
