import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import users from '../data/users'

export default function Users({ favorites = [], onToggleFavorite }) {
  const [usersList, setUsersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Load the users after a 1 second delay, mimicking an async request.
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsersList(users)
      setIsLoading(false)
    }, 1000)

    // Cleanup: clear the timeout if the component unmounts early.
    return () => clearTimeout(timer)
  }, [])

  // Filter by name while the user types (case-insensitive).
  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase()),
  )

  // Update the page title to "Users (n)" with the filtered count.
  // Skipped while loading, otherwise it would briefly show "Users (0)".
  useEffect(() => {
    if (isLoading) return
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length, isLoading])

  if (isLoading) {
    return <Loader text="Loading..." />
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Users
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Showing {filteredUsers.length} of {usersList.length} teammates.
        </p>
      </header>

      {/* Controlled input: value comes from state, changes update state. */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="user-search"
          className="text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Search by name
        </label>
        <input
          id="user-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="e.g. Ava"
          className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-indigo-900"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard
                id={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
                role={user.role}
                isFavorite={favorites.includes(user.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}