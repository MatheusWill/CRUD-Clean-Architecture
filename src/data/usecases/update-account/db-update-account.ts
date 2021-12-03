import {
  UpdateAccount,
  UpdateAccountModel,
  AccountModel,
  Hasher,
  UpdateAccountRepository,
  CheckAccountByEmailRepository
} from './db-update-account-protocols'

export class DbUpdateAccount implements UpdateAccount {

  constructor(
    private readonly encrypter: Hasher,
    private readonly updateAccountRepository: UpdateAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async update(id: number, accountData: UpdateAccountModel): Promise<AccountModel> {
    const account = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)

    if (account) throw new Error('ACCOUNT_EMAIL_EXISTING')

    const hashedPassword = await this.encrypter.hash(accountData.password)
    const newAccount = await this.updateAccountRepository.update(id, Object.assign({}, accountData, { password: hashedPassword }))
    return newAccount
  }

}