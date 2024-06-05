import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Rafael Ricciardi',
  description: 'Portfolio de Rafael Ricciardi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/app-icon-192x192.png" sizes="32x32" />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
