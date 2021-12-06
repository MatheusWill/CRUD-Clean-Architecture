import {
  CheckAccountByEmailRepository,
  DeleteAccount,
  DeleteAccountModel,
  DeleteAccountRepository
} from './db-delete-account-protocols'

export class DbDeleteAccount implements DeleteAccount {

  constructor(
    private readonly deleteAccountRepository: DeleteAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async delete(deleteAccountModel: DeleteAccountModel): Promise<any> {
    const account = await this.checkAccountByEmailRepository.checkByEmail(deleteAccountModel.email)

    if (!account) throw new Error('ACCOUNT_EMAIL_NOT_EXISTING')

    const result = await this.deleteAccountRepository.delete(deleteAccountModel)
    return result
  }

}