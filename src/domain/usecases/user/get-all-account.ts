export interface GetAllAccountModel {
  getAll(): GetAllAccountModel.Result
}

export namespace GetAllAccountModel {
  export type Result = Promise<{
    id: number
    name: string
    email: string
    accessToken: string
  }[]>
}