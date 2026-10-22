import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'quiz': { paramsTuple?: []; params?: {} }
    'configuration': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}