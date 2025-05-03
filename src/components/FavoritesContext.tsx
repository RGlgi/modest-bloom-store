import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface FavoritesContextType {
  favorites: number[]
  toggleFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  clearFavorites: () => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  const isFavorite = (id: number) => favorites.includes(id)

  const clearFavorites = () => setFavorites([])

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context)
    throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}
