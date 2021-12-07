import { AccountModel } from '../../../../domain/models/account'

export interface CheckAccountByIdRepository {
  checkById(id: number): Promise<AccountModel>
}