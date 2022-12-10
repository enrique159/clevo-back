import { IHttpSettings } from "./IHttpSettings.js"

export interface IPayload<T> {
  data?: T
  headers?: IHttpSettings
  params?: IHttpSettings
  url?: string
  baseUrl?: string
}
