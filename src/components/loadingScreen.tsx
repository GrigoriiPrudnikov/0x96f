import { LoaderCircle } from 'lucide-react'

export function LoadingScreen() {
  return (
    <main className="h-screen flex justify-center items-center">
      <LoaderCircle className="h-10 w-10 animate-spin" />
    </main>
  )
}
