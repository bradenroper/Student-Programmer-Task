/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', [controllers.Questions, 'index']).as('quiz')
router.get('/configuration', [controllers.Questions, 'create']).as('configuration')
router.post('/questions', [controllers.Questions, 'store']).as('questions.store')
router.delete('/questions/:id', [controllers.Questions, 'destroy']).as('questions.destroy')
