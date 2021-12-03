import { UpdateAccountModel } from "../../../../../data/usecases/update-account/db-update-account-protocols"
import {
  CreateAccountRepository,
  CheckAccountByEmailRepository,
  UpdateAccessTokenRepository,
  UpdateAccountRepository
} from "../../../../../data/protocols/db"
import { CreateAccountModel, AccountModel } from "../../../../../data/usecases/create-account/db-create-account-protocols"
import knex from '../../helpers/connect'

const TABLE_USERS = 'matheus.users'

export class AccountMssqlRepository implements
  CreateAccountRepository,
  CheckAccountByEmailRepository,
  UpdateAccessTokenRepository,
  UpdateAccountRepository {

  async create(accountData: CreateAccountModel): Promise<AccountModel> {
    const [account] = await knex(TABLE_USERS).insert(accountData).returning('*')

    return account
  }

  async update(id: number, accountData: UpdateAccountModel): Promise<AccountModel> {
    const [account] = await knex(TABLE_USERS).where({ id }).update(accountData).returning('*')

    return account
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

  async updateAccessToken(id: number, token: string): Promise<void> {
    await knex(TABLE_USERS).where({ id }).update({ accessToken: token })
  }
}