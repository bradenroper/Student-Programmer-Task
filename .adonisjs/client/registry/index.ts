/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'quiz': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [[0,"/"]],
    types: placeholder as Registry['quiz']['types'],
  },
  'configuration': {
    methods: ["GET","HEAD"],
    pattern: '/configuration',
    tokens: [[0,"configuration"]],
    types: placeholder as Registry['configuration']['types'],
  },
  'questions.store': {
    methods: ["POST"],
    pattern: '/questions',
    tokens: [[0,"questions"]],
    types: placeholder as Registry['questions.store']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
