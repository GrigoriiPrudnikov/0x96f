import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: '0x96f',
  description: 'Built by Grigorii Prudnikov 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen antialiased bg-white dark:bg-black',
          GeistMono.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

/*


*/
