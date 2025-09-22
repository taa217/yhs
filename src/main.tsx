import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { ThemeProvider } from './modules/theme/ThemeProvider'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programs', element: <Programs /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
