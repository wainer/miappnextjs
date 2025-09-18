import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Menú lateral */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                Inicio Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios/1" className="block py-2 px-4 rounded hover:bg-gray-700">
                Usuario 1
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios/2" className="block py-2 px-4 rounded hover:bg-gray-700">
                Usuario 2
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios/3" className="block py-2 px-4 rounded hover:bg-gray-700">
                Usuario 3
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Contenido principal */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}