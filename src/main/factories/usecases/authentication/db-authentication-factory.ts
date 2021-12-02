import { AccountMssqlRepository } from '../../../../infra/db/mssqldb/models/account-repository/account-repository'
import { BcryptAdapter } from "../../../../infra/criptography/bcrypt-adapter"
import { DbAuthentication } from '../../../../data/usecases/authentication/db-authentication'
import { JwtAdapter } from '../../../../infra/criptography/jwt-adapter'
import { Authentication } from '../../../../domain/usecases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('da')
  const accountMssqlRepository = new AccountMssqlRepository()
  return new DbAuthentication(bcryptAdapter, accountMssqlRepository, jwtAdapter, accountMssqlRepository)
}