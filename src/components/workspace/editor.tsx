'use client'

import { Textarea } from '../ui'

export function Editor() {
  return (
    <Textarea
      className="w-full h-full resize-none focus-visible:ring-0"
      placeholder="Start typing your note here"
    />
  )
}
