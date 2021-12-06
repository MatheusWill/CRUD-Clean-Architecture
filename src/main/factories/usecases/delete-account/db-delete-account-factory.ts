import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { DbDeleteAccount } from '../../../../data/usecases/delete-account/db-delete-account'
import { DeleteAccount } from '../../../../domain/usecases/user/delete-account'

export const makeDbDeleteAccount = (): DeleteAccount => {
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbDeleteAccount(accountMssqlRepository, accountMssqlRepository)
}