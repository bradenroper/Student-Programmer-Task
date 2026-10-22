import { type Data } from '@generated/data'
import { Form } from '@adonisjs/inertia/react'

export default function QuestionConfig({ question }: { question: Data.Question }) {
  return (
    <div className="panel flex items-center justify-between gap-3 p-4">
      <p>{question.text}</p>
      <Form route="questions.destroy" routeParams={{ id: question.id }}>
        {({ processing }) => (
          <button type="submit" className="btn btn--secondary btn--sm" disabled={processing}>
            Delete
          </button>
        )}
      </Form>
    </div>
  )
}
