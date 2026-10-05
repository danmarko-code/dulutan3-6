import { NavLink } from 'react-router-dom'
import Button from './Button'

// `end` on the Home link so it is not treated as active on every route.
const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/users', label: 'Users', end: false },
  { to: '/about', label: 'About', end: false },
]

// NavLink passes an object to className, so the active link can be styled
// differently from the others.
function linkClasses({ isActive }) {
  const base =
    'rounded-md px-3 py-2 text-sm font-medium transition-colors'
  if (isActive) {
    return `${base} bg-indigo-600 text-white font-bold underline underline-offset-4`
  }
  return `${base} text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white`
}

export default function Navbar({ favoritesCount = 0, isDark = false, onToggleDark }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
        <span className="mr-2 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          Team<span className="text-indigo-600 dark:text-indigo-400">Directory</span>
        </span>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClasses}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            Favorites: {favoritesCount}
          </span>
          <Button
            label={isDark ? 'Light Mode' : 'Dark Mode'}
            variant={isDark ? 'danger' : 'primary'}
            onClick={onToggleDark}
          />
        </div>
      </nav>
    </header>
  )
}