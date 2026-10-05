import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  // Lifted high enough that both the Navbar (count) and the UserCards
  // (isFavorite / onToggleFavorite) can read and update it.
  const [favorites, setFavorites] = useState([])
  const [isDark, setIsDark] = useState(false)

  // Add the id when missing, remove it when already present.
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((favoriteId) => favoriteId !== id)
        : [...previous, id],
    )
  }

  const toggleDarkMode = () => {
    setIsDark((previous) => !previous)
  }

  return (
    <BrowserRouter>
      {/* The `dark` class activates every dark: utility below it. */}
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
          <Navbar
            favoritesCount={favorites.length}
            isDark={isDark}
            onToggleDark={toggleDarkMode}
          />

          <main className="mx-auto max-w-5xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users"
                element={
                  <Users
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Team Directory &mdash; React, Vite, Tailwind CSS, react-router-dom
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}