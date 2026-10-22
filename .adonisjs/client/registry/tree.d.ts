/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  quiz: typeof routes['quiz']
  configuration: typeof routes['configuration']
}
