import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])

  const stack = [
    { name: 'React', detail: 'Components, props, useState and useEffect.' },
    { name: 'Vite', detail: 'Dev server and production build tooling.' },
    { name: 'Tailwind CSS', detail: 'Utility-first styling with a class-based dark mode.' },
    { name: 'react-router-dom', detail: 'Client-side routing, NavLink, Link and useParams.' },
  ]

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          About
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          A small demo of client-side routing and reusable React components.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
          Tech stack
        </h2>
        <ul className="space-y-3">
          {stack.map((item) => (
            <li key={item.name} className="flex flex-col sm:flex-row sm:gap-4">
              <span className="w-48 shrink-0 font-semibold text-indigo-600 dark:text-indigo-400">
                {item.name}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
          Routes
        </h2>
        <ul className="space-y-2 font-mono text-sm text-slate-600 dark:text-slate-300">
          <li>/ &rarr; Home</li>
          <li>/users &rarr; Users list with search and favourites</li>
          <li>/users/:id &rarr; User details</li>
          <li>/about &rarr; This page</li>
          <li>* &rarr; 404 Not Found</li>
        </ul>
      </section>
    </div>
  )
}