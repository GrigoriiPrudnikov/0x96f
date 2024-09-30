import { Folder, Note, User, Workspace } from '@/interfaces'
import { create } from 'zustand'

interface Store {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  workspaces: Workspace[]
  currentWorkspaceId: number | null
  folders: Folder[]
  notes: Note[]
}

interface Actions {
  setUser: (user: User | null) => void
  setAccessToken: (token: string) => void
  setRefreshToken: (token: string) => void
  setWorkspaces: (workspaces: Workspace[]) => void
  setCurrentWorkspaceId: (id: number) => void
  setFolders: (folders: Folder[]) => void
  setNotes: (notes: Note[]) => void
}

export const useStore = create<Store & Actions>()(set => ({
  // Store
  user: null,
  accessToken: null,
  refreshToken: null,
  workspaces: [],
  currentWorkspaceId: null,
  folders: [],
  notes: [
    {
      id: 1,
      title: 'Meeting Summary',
      content:
        'Discussed project timelines, assigned tasks to team members, and finalized deadlines for the upcoming quarter.',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-28T10:30:47Z'),
      lastTimeModified: new Date('2024-09-29T11:45:23Z'),
    },
    {
      id: 2,
      title: 'Code Review Notes',
      content:
        'Reviewed the authentication module, identified potential security loopholes, and suggested improvements for better performance.',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-28T08:15:32Z'),
      lastTimeModified: new Date('2024-09-28T16:00:51Z'),
    },
    {
      id: 3,
      title: 'UI/UX Feedback',
      content:
        'The new dashboard design is intuitive, but the navigation needs refinement. Suggested improvements include better iconography and color consistency.',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-28T09:00:12Z'),
      lastTimeModified: new Date('2024-09-28T14:30:05Z'),
    },
    {
      id: 4,
      title: 'Backend Architecture Plan',
      content:
        'Outlined the microservices architecture for the backend, focusing on scalability, database design, and API communication protocols.',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-27T12:45:17Z'),
      lastTimeModified: new Date('2024-09-27T15:00:33Z'),
    },
    {
      id: 5,
      title: 'Marketing Strategy Outline',
      content:
        'Developed a strategy for social media marketing, focusing on targeted campaigns, content creation, and customer engagement.',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-26T14:20:46Z'),
      lastTimeModified: new Date('2024-09-27T10:10:29Z'),
    },
    {
      id: 6,
      title: 'Some note',
      content: 'snflksdfsjkdfhkdsjfhksfdhskjdfkjls',
      workspaceId: 1,
      folderId: 1,
      userId: 1,
      createdAt: new Date('2024-09-30T09:31:09'),
      lastTimeModified: new Date('2024-09-30T10:52:18'),
    },
  ],

  // Actions
  setUser: (user: User | null) => set(_state => ({ user })),
  setAccessToken: (token: string) => set(_state => ({ accessToken: token })),
  setRefreshToken: (token: string) => set(_state => ({ refreshToken: token })),
  setWorkspaces: (workspaces: Workspace[]) => set(_state => ({ workspaces })),
  setFolders: (folders: Folder[]) => set(_state => ({ folders })),
  setNotes: (notes: Note[]) => set(_state => ({ notes })),
  setCurrentWorkspaceId: (id: number) =>
    set(_state => ({ currentWorkspaceId: id })),
}))

// TODO:
// - add api request functions like: login, get workspace, createNote, etc.
// - i dont know wtf i am doing
