/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const BooksController = () => import('../app/controllers/books_controller.js')
const AppController = () => import('../app/controllers/app_controller.js')
router.get('/', [AppController, 'index'])
router
  .group(() => {
    router
      .group(() => {
        router.get('/add-book', [BooksController, 'create']).as('add-book').as('create')
      })
      .prefix('/book')
      .as('book')
  })
  .prefix('/admin')
  .as('admin')
