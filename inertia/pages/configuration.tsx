import Page from '~/components/page'
import AppLayout from '~/layouts/app'
import { type Data } from '@generated/data'
import { type InertiaProps } from '~/types'
import QuestionForm from '~/components/question_form'
import QuestionConfig from '~/components/question_config'

type Props = InertiaProps<{ questions: Data.Question[] }>

export default function Configuration({ questions }: Props) {
  return (
    <Page title="Configuration">
      <div className="flex flex-col gap-6">
        <QuestionForm />

        <div className="flex flex-col gap-3">
          {questions.length === 0 && <p>No questions yet.</p>}
          {questions.map((question) => (
            <QuestionConfig key={question.id} question={question} />
          ))}
        </div>
      </div>
    </Page>
  )
}

Configuration.layout = [AppLayout]
