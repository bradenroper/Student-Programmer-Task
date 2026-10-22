import Page from '~/components/page'
import AppLayout from '~/layouts/app'
import { type Data } from '@generated/data'
import { type InertiaProps } from '~/types'
import QuestionView from '~/components/question_view'

type Props = InertiaProps<{ questions: Data.Question[] }>

export default function Quiz({ questions }: Props) {
  return (
    <Page title="Quiz">
      <div className="flex flex-col gap-3">
        {questions.length === 0 && <p>No questions yet.</p>}
        {questions.map((question) => (
          <QuestionView key={question.id} question={question} />
        ))}
      </div>
    </Page>
  )
}

Quiz.layout = [AppLayout]
