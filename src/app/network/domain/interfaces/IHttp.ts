import { IPayload } from "./IPayload.js"
import { Response } from "./Response.js"

export interface IHttp {
  get<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>>
  put<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>>
  post<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>>
  delete<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>>
  patch<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>>
}
