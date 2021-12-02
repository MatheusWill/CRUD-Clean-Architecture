import {
  CreateAccount,
  CreateAccountModel,
  AccountModel,
  Hasher,
  CreateAccountRepository,
  CheckAccountByEmailRepository
} from './db-create-account-protocols'

export class DbCreateAccount implements CreateAccount {

  constructor(
    private readonly encrypter: Hasher,
    private readonly addAccountRepository: CreateAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async create(accountData: CreateAccountModel): Promise<AccountModel> {
    const account = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)

    if (account) throw new Error('ACCOUNT_EMAIL_EXISTING')

    const hashedPassword = await this.encrypter.hash(accountData.password)
    const newAccount = await this.addAccountRepository.create(Object.assign({}, accountData, { password: hashedPassword }))
    return newAccount

  }
}