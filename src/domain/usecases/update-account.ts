import { AccountModel } from '../models/account'

export interface UpdateAccountModel {
  name: string
  email: string
  password: string
}

export interface UpdateAccount {
  update(id: number, account: UpdateAccountModel): Promise<AccountModel>
}