import { NavLink } from 'react-router-dom'

type Item = { to: string; label: string; end?: boolean }

export function MobileMenu({ open, onClose, items }: { open: boolean; onClose: () => void; items: Item[] }) {
  if (!open) return null
  return (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-16 z-50 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm dark:border-slate-800 dark:bg-slate-900/95 md:hidden"
    >
      <nav className="container-page py-3">
        <ul className="grid gap-1 text-sm">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <a href="/get-involved#donate" className="btn btn-primary w-full">Donate</a>
        </div>
      </nav>
    </div>
  )
}


