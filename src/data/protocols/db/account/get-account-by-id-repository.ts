import { AccountModel } from '../../../../domain/models/account'

export interface GetAccountByIdRepository {
  getById(id: number): Promise<AccountModel>
}