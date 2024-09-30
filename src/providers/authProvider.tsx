'use client'

import { LoadingScreen } from '@/components/loadingScreen'
import { refreshToken as refreshTokenFn } from '@/services/api/auth'
import { getUser } from '@/services/api/user'
import { useStore } from '@/store'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

const PUBLIC_ROUTES: string[] = ['/']

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { setUser } = useStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(pathname)) return setIsLoading(false)

    async function authenticateUser() {
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')

      if (accessToken) {
        const user = await getUser(accessToken)
        if (user) {
          setIsLoading(false)
          setUser(user)
          return
        }
      }

      if (refreshToken) {
        const newAccessToken = await refreshTokenFn(refreshToken)
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken)
          const user = await getUser(newAccessToken)
          if (user) {
            setIsLoading(false)
            setUser(user)
            return
          }
        }
      }

      setIsLoading(false)
      router.push('/login')
    }

    authenticateUser()
  }, [router])

  if (isLoading) {
    return <LoadingScreen />
  }

  return children
}
