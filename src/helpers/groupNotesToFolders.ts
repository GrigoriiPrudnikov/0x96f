import { Note, NotesFolder } from '@/interfaces'

export function groupNotesToFolders(notes: Note[]): {
  folders: NotesFolder[]
  notes: Note[]
} {
  const folders: NotesFolder[] = []
  const unfolderedNotes: Note[] = []

  notes.forEach(note => {
    const folderName = note.folder
    if (!folderName) return unfolderedNotes.push(note)

    const isFolderExists = Boolean(
      folders.find(folder => folder.name === folderName)
    )
    if (!isFolderExists)
      return folders.push({
        name: folderName,
        notes: [note],
      })

    folders.find(folder => folder.name === folderName)?.notes.push(note)
  })

  // Sort folders
  folders.sort((a, b) => a.name.localeCompare(b.name))

  // Sort notes
  folders.forEach(folder => {
    folder.notes.sort((a, b) => a.title.localeCompare(b.title))
  })

  return {
    folders,
    notes: unfolderedNotes,
  }
}
