import { Editor } from '@/components/workspace'
import { Note } from '@/interfaces'

interface Props {
  params: {
    id: Note['id']
  }
}

export default function Page() {
  return <Editor />
}
