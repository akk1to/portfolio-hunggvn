import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'akk1to.dev Profile',
  description: 'Profile of akk1to.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
