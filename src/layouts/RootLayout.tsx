import { Outlet } from 'react-router-dom'
import { Navbar } from '../modules/navigation/Navbar'
import { Footer } from '../modules/navigation/Footer'

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


