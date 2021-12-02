import { AccountModel } from '../../../../domain/models/account'

export interface CheckAccountByEmailRepository {
  checkByEmail(email: string): Promise<AccountModel>
}