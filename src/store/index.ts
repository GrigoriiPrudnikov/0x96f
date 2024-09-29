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
  notes: [],

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
