import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { DbGetAccount } from '../../../../data/usecases/get-account/db-get-account'
import { GetAccount } from '../../../../domain/usecases/user/get-account'

export const makeDbGetAccount = (): GetAccount => {
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbGetAccount(accountMssqlRepository)
}