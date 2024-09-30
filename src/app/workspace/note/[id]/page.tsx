import { Textarea } from '@/components/ui'
import { Note } from '@/interfaces'

interface Props {
  params: {
    id: Note['id']
  }
}

export default function Page() {
  return (
    <Textarea
      className="border-0 w-full h-full resize-none focus-visible:ring-0"
      placeholder="Start typing your note here"
    />
  )
}
