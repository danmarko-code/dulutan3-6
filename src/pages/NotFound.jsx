import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found'
  }, [])

  // useNavigate keeps navigation client-side (no full page reload).
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-7xl font-extrabold text-indigo-600 dark:text-indigo-400">
        404
      </p>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="max-w-md text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist or may have been moved.
      </p>

      {/* Second usage of the shared Button component with different props. */}
      <div className="mt-2 flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Back to Home
        </Link>
        <Button
          label="Go to Users"
          variant="danger"
          onClick={() => navigate('/users')}
        />
      </div>
    </div>
  )
}