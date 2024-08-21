import { WorkSpaceEditor, WorkspaceSidebar } from '@/components/workspace'

export default function Page() {
  return (
    <>
      <main className="p-8 h-screen flex justify-between gap-8">
        <div className="w-1/4">
          <WorkspaceSidebar />
        </div>
        <div className="w-3/4">
          <WorkSpaceEditor />
        </div>
      </main>
    </>
  )
}
