
export interface Categories {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  games: Game[]
}

export interface Game {
  id: number
  slug: string
  name: string
  added: number
}
