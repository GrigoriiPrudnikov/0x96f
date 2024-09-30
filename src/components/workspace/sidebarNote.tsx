'use client'

import { formatDate } from '@/helpers'
import { Note } from '@/interfaces'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  note: Note
}

export function SidebarNote({ note }: Props) {
  const pathname = usePathname()

  const isActive = pathname.split('/').at(-1) === String(note.id)

  return (
    <div className={clsx('px-8 py-2 text-zinc-500', isActive && 'text-white')}>
      <Link href={`/workspace/note/${note.id}`}>
        <div>
          <div className="truncate">{note.title}</div>
          <div className="truncate text-sm">
            <span className="mr-2">{formatDate(note.lastTimeModified)}</span>{' '}
            {note.content}
          </div>
        </div>
      </Link>
    </div>
  )
}
