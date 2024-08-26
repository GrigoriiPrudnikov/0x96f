import { Workspace } from "./workspace"

export interface User {
  id: number
  username: string
  email: string
  password: string
  workspaces: Workspace[]
}