import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import users from '../data/users'

const features = [
  {
    title: 'Local mock data',
    text: 'All 10 teammates come from src/data/users.js. No API, no network call.',
  },
  {
    title: 'Instant search',
    text: 'The users page filters by name on every keystroke with a controlled input.',
  },
  {
    title: 'Favorites & dark mode',
    text: 'Star teammates and flip the whole app between light and dark themes.',
  },
]

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          React + Vite + Tailwind
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Team Directory
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Browse {users.length} teammates, search them by name, star your
          favourites and open a detail page for each person - all without ever
          reloading the page.
        </p>

        {/* Button component used with children + a secondary variant */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            label="Browse the team"
            variant="primary"
            onClick={() => navigate('/users')}
          >
            <span aria-hidden="true">&rarr;</span>
          </Button>
          <Button
            label="Learn more"
            variant="danger"
            onClick={() => navigate('/about')}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          What this app demonstrates
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}