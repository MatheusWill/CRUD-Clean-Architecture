import { AccountModel } from '../../models/account'

export interface GetAccountByIdModel {
  id: number
  name: string
  email: string
  accessToken: string
}

export interface GetAccountById {
  getById(id: number): Promise<AccountModel>
}