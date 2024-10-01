'use client'

import { Note } from '@/interfaces'
import { useStore } from '@/store'
import { useEffect, useState } from 'react'
import { SidebarFolder, SidebarNote } from '.'
import {
  Accordion,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
} from '../ui'

export function WorkspaceSidebar() {
  const { notes, folders } = useStore()
  const [rootNotes, setRootNotes] = useState<Note[]>(
    notes.filter(({ folderId }) => !folderId)
  )

  useEffect(() => {
    setRootNotes(notes.filter(({ folderId }) => !folderId))
  }, [notes, folders])

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ScrollArea className="p-4 h-full w-full">
          {rootNotes.map(note => (
            <SidebarNote key={note.id} note={note} />
          ))}
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={33} maxSize={66}>
        <ScrollArea className="p-4 h-full w-full">
          <Accordion type="multiple">
            {folders.map(folder => (
              <SidebarFolder key={folder.id} folder={folder} />
            ))}
          </Accordion>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
