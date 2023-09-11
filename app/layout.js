import './globals.css'
import '../normalize.css'

export const metadata = {
  title: 'Bloggo',
  description: 'Blog site for practice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
