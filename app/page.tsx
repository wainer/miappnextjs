'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleDashboardClick = () => {
    router.push('/dashboard')
  }

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a nuestra aplicación</h1>
      <p className="text-lg mb-6">Esta es una aplicación de ejemplo con routing y layout en Next.js</p>
      <button 
        onClick={handleDashboardClick}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Ir al Dashboard
      </button>
    </div>
  )
}