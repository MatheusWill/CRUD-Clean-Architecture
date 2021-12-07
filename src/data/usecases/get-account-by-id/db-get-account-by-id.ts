import {
  GetAccountByIdRepository,
  AccountModel,
  CheckAccountByIdRepository
} from './db-get-account-by-id-protocols'

export class DbGetAccountById implements GetAccountByIdRepository {

  constructor(
    private readonly getAccountByIdRepository: GetAccountByIdRepository,
    private readonly checkAccountByIdRepository: CheckAccountByIdRepository
  ) { }

  async getById(id: number): Promise<AccountModel> {
    const account = await this.checkAccountByIdRepository.checkById(id)

    if (!account) throw new Error('ID_NOT_EXISTING')

    const result = await this.getAccountByIdRepository.getById(id)
    return result
  }

}