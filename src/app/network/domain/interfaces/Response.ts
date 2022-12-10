import { NetworkMessage } from "./NetworkMessage.js"

export interface Response<T> {
  meta?: T
  data: T
  warnings: NetworkMessage[]
  errors: NetworkMessage[]
}
