import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { BcryptAdapter } from "../../../../infra/criptography/bcrypt-adapter"
import { DbCreateAccount } from '../../../../data/usecases/create-account/db-create-account'
import { CreateAccount } from '../../../../domain/usecases/create-account'

export const makeDbCreateAccount = (): CreateAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbCreateAccount(bcryptAdapter, accountMssqlRepository, accountMssqlRepository)
}