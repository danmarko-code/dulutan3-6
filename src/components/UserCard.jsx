import { Link } from 'react-router-dom'
import Button from './Button'

// Props are destructured in the function signature.
export default function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-slate-900 dark:text-white">
            {name}
          </h2>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {role}
          </p>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">
            {company}
          </p>
        </div>
      </div>

      <a
        href={`mailto:${email}`}
        className="mt-4 truncate text-sm text-slate-600 underline-offset-2 hover:underline dark:text-slate-300"
      >
        {email}
      </a>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <Button
          label={isFavorite ? '★ Favorited' : '☆ Favorite'}
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={() => onToggleFavorite(id)}
        />
        <Link
          to={`/users/${id}`}
          className="text-sm font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500 dark:text-indigo-400"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}