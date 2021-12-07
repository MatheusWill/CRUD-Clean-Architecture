import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { DbGetAccountById } from '../../../../data/usecases/get-account-by-id/db-get-account-by-id'
import { GetAccountById } from '../../../../domain/usecases/user/get-account-by-id'

export const makeDbGetAccountById = (): GetAccountById => {
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbGetAccountById(accountMssqlRepository, accountMssqlRepository)
}