import { WorkspaceSidebar } from '@/components/workspace'
import { ReactNode } from 'react'

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <main className="p-4 h-screen flex justify-between gap-4">
        <div className="w-1/4">
          <WorkspaceSidebar />
        </div>
        <div className="w-3/4">{children}</div>
      </main>
    </>
  )
}
