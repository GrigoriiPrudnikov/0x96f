import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui'
import { WorkspaceSidebar } from '@/components/workspace'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel minSize={15} maxSize={30}>
          <WorkspaceSidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
