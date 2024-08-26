'use client'

import { sortNotesAndFolders } from '@/helpers'
import { Workspace } from '@/interfaces'
import { useMemo, useState } from 'react'
import { SidebarCreateButton, SidebarNote, SidebarNoteFolder } from '.'
import {
  Card,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui'

const TEST_WORKSPACE: Workspace = {
  id: 999,
  name: 'Personal',
  folders: [
    {
      id: 0,
      name: 'Travel',
      notes: [
        {
          id: 8,
          title: 'Book flights for vacation',
        },
        {
          id: 9,
          title: 'Research travel insurance',
        },
      ],
    },
    {
      id: 1,
      name: 'Fitness',
      notes: [
        {
          id: 7,
          title: 'Complete daily workout',
        },
      ],
    },
    {
      id: 2,
      name: 'Personal',
      notes: [
        {
          id: 6,
          title: 'Organize photo album',
        },
      ],
    },
    {
      id: 3,
      name: 'Work',
      notes: [
        {
          id: 5,
          title: 'Finish project report',
        },
      ],
    },
  ],
  notes: [
    {
      id: 0,
      title: 'Buy groceries',
    },
    {
      id: 1,
      title: 'Schedule dentist appointment',
    },
    {
      id: 2,
      title: 'Read a new book',
    },
    {
      id: 3,
      title: 'Plan weekend getaway',
    },
    {
      id: 4,
      title: 'Meditation practice',
    },
  ],
}

export function WorkspaceSidebar() {
  const [workspace, setWorkspace] = useState<Workspace>(
    sortNotesAndFolders(TEST_WORKSPACE)
  )

  const { folders, notes } = useMemo(
    () => ({
      folders: workspace.folders.map(folder => (
        <SidebarNoteFolder key={folder.id} folder={folder} />
      )),
      notes: workspace.notes.map(note => (
        <SidebarNote key={note.id} note={note} />
      )),
    }),
    [workspace]
  )
  

  return (
    <Card className="p-4 h-full flex flex-col justify-between">
      <ScrollArea className="h-full">
        {...folders}
        {...notes}
      </ScrollArea>
      <div className="flex gap-1">
        <SidebarCreateButton />
        <Select defaultValue="personal">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Workspaces</SelectLabel>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Card>
  )
}
