/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const FilesController = () => import('#controllers/files_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.post('/', [FilesController, 'upload'])
    router.get('/get/*', [FilesController, 'get'])
  })
  .prefix('/upload')
