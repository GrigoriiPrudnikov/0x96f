import { NotesFolder } from '@/interfaces'
import { Folder } from 'lucide-react'
import { SidebarNote } from '.'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui'

export function SidebarNoteFolder({
  folder,
}: Readonly<{ folder: NotesFolder }>) {
  const notes = folder.notes.map(note => (
    <SidebarNote key={note.title} note={note} />
  ))

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={folder.name}>
        <AccordionTrigger className=" p-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5 text-zinc-600" />
            <div className="truncate text-sm">{folder.name}</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-0 pl-8">{...notes}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
