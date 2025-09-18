interface UserPageProps {
  params: {
    id: string
  }
}

// Datos de ejemplo para usuarios
const users: Record<string, { name: string; email: string; role: string }> = {
  '1': { name: 'Juan Pérez', email: 'juan@example.com', role: 'Administrador' },
  '2': { name: 'María García', email: 'maria@example.com', role: 'Editor' },
  '3': { name: 'Carlos López', email: 'carlos@example.com', role: 'Usuario' },
}

export default function UserPage({ params }: UserPageProps) {
  const user = users[params.id]

  if (!user) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Usuario no encontrado</h1>
        <p>El usuario con ID {params.id} no existe.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <div className="bg-white p-6 rounded shadow">
        <p><strong>ID:</strong> {params.id}</p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
      </div>
    </div>
  )
}