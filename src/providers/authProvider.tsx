'use client'

import { refreshToken as refreshTokenFn } from '@/services/api/auth'
import { getUser } from '@/services/api/user'
import { useStore } from '@/store'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

const PUBLIC_ROUTES: string[] = ['/']

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { setUser } = useStore()

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(pathname)) return

    async function authenticateUser() {
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')

      if (accessToken) {
        const user = await getUser(accessToken)
        if (user) return setUser(user)
      }

      if (refreshToken) {
        const newAccessToken = await refreshTokenFn(refreshToken)
        if (newAccessToken) {
          const user = await getUser(newAccessToken)
          if (user) return setUser(user)
        }
      }

      router.push('/login')
    }

    authenticateUser()
  }, [router])

  return children
}
