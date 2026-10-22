import Page from '~/components/page'
import AppLayout from '~/layouts/app'
import QuestionForm from '~/components/question_form'

export default function Configuration() {
  return (
    <Page title="Configuration">
      <QuestionForm />
    </Page>
  )
}

Configuration.layout = [AppLayout]
