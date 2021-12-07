import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { DbGetAllAccount } from '../../../../data/usecases/get-all-account/db-get-all-account'
import { GetAllAccountModel } from '../../../../domain/usecases/user/get-all-account'

export const makeDbGetAllAccount = (): GetAllAccountModel => {
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbGetAllAccount(accountMssqlRepository)
}