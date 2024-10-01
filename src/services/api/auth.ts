import { API_AUTH_URL } from '@/constants'
import ky from 'ky'

interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export async function login(
  username: string,
  password: string
): Promise<LoginResponse | null> {
  try {
    const response = await ky.post<LoginResponse>(`${API_AUTH_URL}/login`, {
      json: {
        username,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) return null

    return await response.json()
  } catch (e) {
    return null
  }
}

interface RefreshTokenReposne {
  accessToken: string
}

export async function refreshToken(
  refreshToken: string
): Promise<string | null> {
  try {
    const response = await ky.post<RefreshTokenReposne>(
      `${API_AUTH_URL}/refresh-token`,
      {
        json: { refresh_token: refreshToken },
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (!response.ok) return null

    return (await response.json()).accessToken
  } catch (e) {
    return null
  }
}
