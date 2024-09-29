'use client'

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

export function WorkspaceSidebar() {
  return (
    <Card className="p-4 h-full flex flex-col justify-between">
      <ScrollArea className="h-full"></ScrollArea>
      <div className="flex gap-2">
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
