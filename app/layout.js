import './globals.css'

export const metadata = {
  title: 'Final Enhanced Deployment Test',
  description: 'This is the final test of our enhanced deployment system with all fixes applied\!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
