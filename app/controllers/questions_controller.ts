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
    const questions = await Question.query().orderBy('id')
    return inertia.render('configuration', { questions: QuestionTransformer.transform(questions) })
  }

  async store({ request, response }: HttpContext) {
    const { text } = await request.validateUsing(createQuestionValidator)
    await Question.create({ text })

    response.redirect().back()
  }

  async destroy({ params, response }: HttpContext) {
    const question = await Question.findOrFail(params.id)
    await question.delete()

    response.redirect().back()
  }
}
