import { Workspace } from '@/interfaces'

export function sortNotesAndFolders(workspace: Workspace) {
  const { folders, notes } = workspace

  const sortedNotes = notes.sort((a, b) => a.title.localeCompare(b.title))
  const sortedFolders = folders
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(folder => ({
      ...folder,
      notes: folder.notes.sort((a, b) => a.title.localeCompare(b.title)),
    }))

  return {
    ...workspace,
    folders: sortedFolders,
    notes: sortedNotes,
  }
}
