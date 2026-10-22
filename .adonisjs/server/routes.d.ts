import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
    'questions.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'questions.store': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}