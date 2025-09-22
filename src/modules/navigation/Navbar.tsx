import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ThemeToggle } from '../theme/ThemeToggle'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/get-involved', label: 'Get Involved' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded bg-brand-gradient" aria-hidden />
          <span className="text-gradient-brand">Youth Horizon Network</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end as boolean | undefined}
              className={({ isActive }) =>
                isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-outline md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} items={items} />
    </header>
  )
}


