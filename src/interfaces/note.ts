export interface Note {
  id: number
  title: string
  content: string
  workspaceId: number
  folderId: number
  userId: number
  createdAt: Date
  lastTimeModified: Date
}
