import './globals.css'

export const metadata = {
  title: 'LowTube',
  description: 'Simplified Youtube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
