import { type Data } from '@generated/data'

export default function QuestionView({ question }: { question: Data.Question }) {
  return (
    <div className="panel p-4">
      <p>{question.text}</p>
    </div>
  )
}
