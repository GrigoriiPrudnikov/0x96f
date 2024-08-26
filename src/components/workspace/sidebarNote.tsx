import { Note } from '@/interfaces'
import { File } from 'lucide-react'

export function SidebarNote({ note }: Readonly<{ note: Note }>) {
  return (
    <a
      href={`/workspace/note/${note.id}`}
      className="flex items-center gap-2 p-2 hover:underline"
    >
      <File className="h-5 w-5 text-zinc-600" />
      <div className="truncate text-sm">{note.title}</div>
    </a>
  )
}
