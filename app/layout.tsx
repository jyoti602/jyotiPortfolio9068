import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jyoti - Full Stack Web Developer Portfolio',
  description: 'Personal portfolio showcasing Jyoti\'s work as a Full Stack Web Developer with projects in React, Node.js, Python, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
