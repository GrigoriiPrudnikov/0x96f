import { Note } from './note'
import { NotesFolder } from './notesFolder'

export interface Workspace {
  id: number
  name: string
  folders: NotesFolder[]
  notes: Note[]
}
