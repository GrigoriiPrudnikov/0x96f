export interface Note {
  id: number
  title: string
  content: string
  workspaceId: number
  folderId: number | null
  userId: number
  createdAt: Date
  lastTimeModified: Date
}
