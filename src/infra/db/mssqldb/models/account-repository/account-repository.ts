import { UpdateAccountModel } from "../../../../../data/usecases/update-account/db-update-account-protocols"
import {
  CreateAccountRepository,
  CheckAccountByEmailRepository,
  CheckAccountByIdRepository,
  UpdateAccessTokenRepository,
  UpdateAccountRepository,
  DeleteAccountRepository,
  GetAccountByIdRepository,
  GetAllAccountRepository
} from "../../../../../data/protocols/db"
import { CreateAccountModel, AccountModel } from "../../../../../data/usecases/create-account/db-create-account-protocols"
import { DeleteAccountModel } from "../../../../../data/usecases/delete-account/db-delete-account-protocols"
import knex from '../../helpers/connect'

const TABLE_USERS = 'matheus.users'

export class AccountMssqlRepository implements
  CreateAccountRepository,
  CheckAccountByEmailRepository,
  CheckAccountByIdRepository,
  UpdateAccessTokenRepository,
  UpdateAccountRepository,
  DeleteAccountRepository,
  GetAccountByIdRepository,
  GetAllAccountRepository {

  async getById(id: number): Promise<AccountModel> {
    const account = await knex(TABLE_USERS)
      .select('id', 'name', 'email', 'accessToken')
      .where({ id })
      .first()

    return account
  }

  async getAll(): GetAllAccountRepository.Result {
    const account = await knex(TABLE_USERS)
      .select('id', 'name', 'email', 'accessToken')

    return account
  }

  async create(accountData: CreateAccountModel): Promise<AccountModel> {
    const [account] = await knex(TABLE_USERS).insert(accountData).returning('*')

    return account
  }

  async update(id: number, accountData: UpdateAccountModel): Promise<AccountModel> {
    const [account] = await knex(TABLE_USERS).where({ id }).update(accountData).returning('*')

    return account
  }

  async delete(deleteAccountModel: DeleteAccountModel): Promise<any> {
    const { email } = deleteAccountModel
    const result = await knex(TABLE_USERS).del().where({ email })

    return result
  }

  async checkByEmail(email: string): Promise<AccountModel> {
    const account = knex(TABLE_USERS).select('*').where({
      email: email
    }).first()

    // const account = knex(TABLE_USERS)
    //   .select('email')
    //   .where('email', '=', email)
    //   .first()

    return account
  }

  async checkById(id: number): Promise<AccountModel> {
    const account = knex(TABLE_USERS).select('*').where({ id }).first()

    return account
  }

  async updateAccessToken(id: number, token: string): Promise<void> {
    await knex(TABLE_USERS).where({ id }).update({ accessToken: token })
  }
}