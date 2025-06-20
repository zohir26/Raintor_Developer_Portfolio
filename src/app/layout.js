// app/layout.js
import './globals.css'
import {ThemeProvider} from '@/components/ThemeProvider'

export const metadata = {
  title: 'My Portfolio',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
