import vine from '@vinejs/vine'

export const createQuestionValidator = vine.create({
  text: vine.string().trim().minLength(1),
})
