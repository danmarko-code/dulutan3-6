import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import users from '../data/users'

export default function UserDetails() {
  const { id } = useParams()
  // `loadedId` tracks which id the current `user` belongs to, so the
  // loading state can be derived instead of being set synchronously.
  const [result, setResult] = useState({ loadedId: null, user: null })

  // Runs again whenever the :id parameter in the URL changes.
  useEffect(() => {
    const timer = setTimeout(() => {
      const found = users.find((item) => item.id === Number(id)) ?? null
      setResult({ loadedId: id, user: found })
    }, 300)

    return () => clearTimeout(timer)
  }, [id])

  const isLoading = result.loadedId !== id
  const user = result.user

  // Update the page title to the user's name.
  useEffect(() => {
    if (isLoading) return
    document.title = user ? user.name : 'User not found'
  }, [user, isLoading])

  if (isLoading) {
    return <Loader text="Loading..." />
  }

  if (!user) {
    return (
      <div className="space-y-4">
        <ErrorMessage message="User not found." />
        <Link
          to="/users"
          className="inline-block font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
        >
          &larr; Back to Users
        </Link>
      </div>
    )
  }

  const details = [
    { label: 'Email', value: user.email },
    { label: 'Company', value: user.company },
    { label: 'Role', value: user.role },
  ]

  return (
    <div className="space-y-6">
      <Link
        to="/users"
        className="inline-block font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500 dark:text-indigo-400"
      >
        &larr; Back to Users
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {user.name}
        </h1>
        <p className="mt-1 text-lg font-medium text-indigo-600 dark:text-indigo-400">
          {user.role}
        </p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50"
            >
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {detail.label}
              </dt>
              <dd className="mt-1 break-words font-medium text-slate-900 dark:text-white">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  )
}