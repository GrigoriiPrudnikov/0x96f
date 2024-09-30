'use client'

import { useStore } from '@/store'
import { SidebarNote } from './sidebarNote'

export function WorkspaceSidebar() {
  const { notes } = useStore()
  const sortedNotes = notes.sort(
    (a, b) => Number(b.lastTimeModified) - Number(a.lastTimeModified)
  )

  return (
    <div className="h-full p-4">
      {sortedNotes.map(note => (
        <SidebarNote note={note} key={note.id} />
      ))}
    </div>
  )
}
