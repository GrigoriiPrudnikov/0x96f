import { Note } from '@/interfaces'
import { File } from 'lucide-react'

export function SidebarNote({ note }: Readonly<{ note: Note }>) {
  return (
    <a className="flex items-center gap-2 p-2 cursor-pointer hover:underline">
      <File className="h-5 w-5 text-zinc-600" />
      <div className="truncate text-sm">{note.title}</div>
    </a>
  )
}
