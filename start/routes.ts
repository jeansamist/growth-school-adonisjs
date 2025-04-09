/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AppController = () => import('../app/controllers/app_controller.js')
router.get('/', [AppController, 'index'])
