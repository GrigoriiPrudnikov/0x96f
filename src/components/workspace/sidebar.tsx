import { groupNotesToFolders } from '@/helpers'
import { Note } from '@/interfaces'
import { Card } from '../ui'
import { SidebarNote } from './sidebarNote'
import { SidebarNoteFolder } from './sidebarNoteFolder'

const TEST_NOTES: Note[] = [
  {
    id: 0,
    folder: null,
    title: 'Buy groceries',
  },
  {
    id: 1,
    folder: null,
    title: 'Schedule dentist appointment',
  },
  {
    id: 2,
    folder: null,
    title: 'Read a new book',
  },
  {
    id: 3,
    folder: null,
    title: 'Plan weekend getaway',
  },
  {
    id: 4,
    folder: null,
    title: 'Meditation practice',
  },
  {
    id: 5,
    folder: 'Work',
    title: 'Finish project report',
  },
  {
    id: 6,
    folder: 'Personal',
    title: 'Organize photo album',
  },
  {
    id: 7,
    folder: 'Fitness',
    title: 'Complete daily workout',
  },
  {
    id: 8,
    folder: 'Travel',
    title: 'Book flights for vacation',
  },
  {
    id: 9,
    folder: 'Travel',
    title: 'Research travel insurance',
  },
]

export function WorkspaceSidebar() {
  const groupedNotes = groupNotesToFolders(TEST_NOTES)

  const folders = groupedNotes.folders.map(folder => (
    <SidebarNoteFolder key={folder.name} folder={folder} />
  ))
  const notes = groupedNotes.notes.map(note => (
    <SidebarNote key={note.title} note={note} />
  ))

  return (
    <Card className="p-4 h-full">
      {...folders}
      {...notes}
    </Card>
  )
}
