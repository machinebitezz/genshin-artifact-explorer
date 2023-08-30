import { type Artifact } from './Artifact.ts'

export interface GOOD {
  format: String
  version: number
  artifacts: Artifact[]
}