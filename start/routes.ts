/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('quiz', {}).as('quiz')
router.on('/configuration').renderInertia('configuration', {}).as('configuration')
