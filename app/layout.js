import './globals.css'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Green API',
  description: 'Chat App with Green API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        {children}
      </body>
    </html>
  )
}
