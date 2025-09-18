import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi App Next.js',
  description: 'Aplicación con routing y layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Mi App</Link>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Inicio</Link></li>
                <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
                <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}