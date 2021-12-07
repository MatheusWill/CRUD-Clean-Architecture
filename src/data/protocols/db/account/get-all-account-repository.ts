export interface GetAllAccountRepository {
  getAll(): GetAllAccountRepository.Result
}

export namespace GetAllAccountRepository {
  export type Result = Promise<{
    id: number
    name: string
    email: string
    accessToken: string
  }[]>
}