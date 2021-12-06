import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { BcryptAdapter } from "../../../../infra/criptography/bcrypt-adapter"
import { DbUpdateAccount } from '../../../../data/usecases/update-account/db-update-account'
import { UpdateAccount } from '../../../../domain/usecases/user/update-account'

export const makeDbUpdateAccount = (): UpdateAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbUpdateAccount(bcryptAdapter, accountMssqlRepository, accountMssqlRepository)
}