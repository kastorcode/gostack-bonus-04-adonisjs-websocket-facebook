'use strict'

const Post = use('App/Models/Post')


class PostController {
  async index ({ request }) {
    const { page = 1 } = request.get()

    const posts = await Post.query()
      .with('user')
      .with('comments')
      .paginate(page)

    return posts
  }


  async show ({ params }) {
    const post = await Post.findOrFail(params.id)

    await post.load('user')
    await post.load('comments')

    return post
  }


  async store ({ request, auth }) {
    const content = request.input('content')

    const post = await Post.create({
      content,
      user_id: auth.user.id
    })

    return post
  }


  async update ({ params, request }) {
    const post = await Post.findOrFail(params.id)
    const data = request.only([
      'content'
    ])

    post.merge(data)

    await post.load('user')
    await post.load('comments')

    await post.save()

    return post
  }


  async destroy ({ params, auth, response }) {
    const post = await Post.findOrFail(params.id)

    if (post.user_id != auth.user.id) {
      return response.status(404).json()
    }

    await post.delete()
  }
}


module.exports = PostController
