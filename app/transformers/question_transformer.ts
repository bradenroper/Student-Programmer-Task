import { BaseTransformer } from '@adonisjs/core/transformers'
import type Question from '#models/question'

export default class QuestionTransformer extends BaseTransformer<Question> {
  toObject() {
    return this.pick(this.resource, ['id', 'text'])
  }
}
