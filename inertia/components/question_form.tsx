import { Form } from '@adonisjs/inertia/react'

export default function QuestionForm() {
  return (
    <Form route="questions.store" resetOnSuccess>
      {({ errors, processing }) => (
        <div className="flex flex-col gap-3">
          <div className="field">
            <label className="field__label" htmlFor="text">
              Question
            </label>
            <input
              id="text"
              name="text"
              type="text"
              className="field__input"
              aria-invalid={errors.text ? 'true' : 'false'}
            />
            {errors.text && <span className="field__error">{errors.text}</span>}
          </div>

          <div>
            <button type="submit" className="btn btn--primary" disabled={processing}>
              Add question
            </button>
          </div>
        </div>
      )}
    </Form>
  )
}
