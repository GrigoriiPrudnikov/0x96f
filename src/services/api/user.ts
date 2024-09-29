import { API_USER_URL } from '@/constants'
import { User } from '@/interfaces'
import ky from 'ky'

export async function createUser(
  username: string,
  password: string
): Promise<User | null> {
  const response = await ky.post<User>(API_USER_URL, {
    json: {
      username,
      password,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) return null

  return response.json()
}

export async function getUser(accessToken: string): Promise<User | null> {
  const response = await ky.get<User>(API_USER_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) return null

  return response.json()
}

// export async function getUserWorkspaces({
//   access_token,
// }: {
//   access_token: string
// }): Promise<number[]> {
//   const workspaceIds = await ky
//     .get<number[]>(`${API_USER_URL}/workspaces`, {
//       headers: {
//         Authorization: `Bearer: ${access_token}`,
//       },
//     })
//     .json()

//   return workspaceIds
// }
