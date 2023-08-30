import { type Substat } from './Substat'

export interface Artifact {
  setKey: string
  slotKey: string
  rarity: 1 | 2 | 3 | 4 | 5
  mainStatKey: string
  level: number
  substats: Substat[]
}