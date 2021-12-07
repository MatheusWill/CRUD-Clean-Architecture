import {
  GetAllAccountRepository
} from './db-get-all-account-protocols'

export class DbGetAllAccount implements GetAllAccountRepository {

  constructor(
    private readonly getAllAccountRepository: GetAllAccountRepository,
  ) { }

  async getAll(): GetAllAccountRepository.Result {
    const allAccount = await this.getAllAccountRepository.getAll()
    return allAccount
  }

}