'use client'

import { Note } from '@/interfaces'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  note: Note
  withGap?: boolean
}

export function SidebarNote({ note, withGap = false }: Props): ReactNode {
  const pathname = usePathname()
  const isActive =
    pathname.split('/').at(-2) === 'note' &&
    pathname.split('/').at(-1) == String(note.id)

  const buttonStyles = cn(
    'p-2 pl-0 flex items-center gap-2',
    isActive ? 'text-white' : 'text-zinc-500',
    withGap && 'pl-6'
  )
  const dotStyles = cn(
    'min-w-2 min-h-2 m-2 rounded-full',
    isActive ? 'bg-white' : 'bg-zinc-500'
  )

  return (
    <Link href={`/workspace/note/${note.id}`}>
      <div className={buttonStyles}>
        <div className="h-4 w-4 flex justify-center items-center">
          <div className={dotStyles}></div>
        </div>
        <div className="transition-colors hover:text-white truncate">
          {note.title}
        </div>
      </div>
    </Link>
  )
}
