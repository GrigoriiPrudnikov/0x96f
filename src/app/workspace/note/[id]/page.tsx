'use client'

import { Textarea } from '@/components/ui'
import { formatDate } from '@/helpers'
import { useStore } from '@/store'

interface Props {
  params: {
    id: string
  }
}

export default function Page({ params }: Props) {
  const { notes } = useStore()
  const note = notes.find(note => note.id === Number(params.id))

  if (!note) return 'shit'

  return (
    <main className='w-full h-full'>
      <div className="flex justify-center text-sm text-zinc-500">
        {formatDate(note.lastTimeModified)}
      </div>
      <Textarea
        className="border-0 rounded-none bg-white dark:bg-black w-full h-full resize-none focus-visible:ring-0 ring-offset-0"
        placeholder="Start typing your note here"
      />
    </main>
  )
}
