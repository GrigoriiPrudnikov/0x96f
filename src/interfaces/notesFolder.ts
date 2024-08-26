import { Note } from './note'

export interface NotesFolder {
  id: number
  name: string
  notes: Note[]
}
