'use client'

import { Folder } from '@/interfaces'
import { useStore } from '@/store'
import { SidebarNote } from '.'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui'

interface Props {
  folder: Folder
}

export function SidebarFolder({ folder }: Props) {
  const { notes } = useStore()
  const folderNotes = notes
    .filter(({ folderId }) => folderId === folder.id)
    .sort((a, b) => b.title.localeCompare(a.title))

  return (
    <AccordionItem value={String(folder.id)}>
      <AccordionTrigger className="text-zinc-500 transition-colors hover:text-white hover:no-underline">
        {folder.name}
      </AccordionTrigger>
      <AccordionContent>
        {folderNotes.map(note => (
          <SidebarNote key={note.id} note={note} withGap />
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
