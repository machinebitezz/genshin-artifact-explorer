import { type Artifact } from './Artifact'

export interface GOOD {
  format: String
  version: number
  artifacts: Artifact[]
}