import {
  GetAccount,
  GetAccountRepository
} from './db-get-account-protocols'

export class DbGetAccount implements GetAccount {

  constructor(
    private readonly getAccountRepository: GetAccountRepository,
  ) { }

  async get(): Promise<any> {
    const account = await this.getAccountRepository.get()
    return account
  }

}