'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('users', 'UserController.store').validator('UserCreate')

Route.put('users/:id', 'UserController.update').validator('UserUpdate')


Route.group(() => {
  Route.resource('posts', 'PostController')
    .apiOnly()
    .validator(new Map([
      [['posts.store'], ['PostCreate']],
      [['posts.update'], ['PostUpdate']]
    ]))

  Route.post('posts/:id/likes', 'LikePostController.store')
})
  .middleware(['auth'])
