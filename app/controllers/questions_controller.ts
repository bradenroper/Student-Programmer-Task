import Question from '#models/question'
import type { HttpContext } from '@adonisjs/core/http'
import QuestionTransformer from '#transformers/question_transformer'
import { createQuestionValidator } from '#validators/question'

export default class QuestionsController {
  async index({ inertia }: HttpContext) {
    const questions = await Question.query().orderBy('id')
    return inertia.render('quiz', { questions: QuestionTransformer.transform(questions) })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('configuration', {})
  }

  async store({ request, response }: HttpContext) {
    const { text } = await request.validateUsing(createQuestionValidator)
    await Question.create({ text })

    response.redirect().back()
  }
}
