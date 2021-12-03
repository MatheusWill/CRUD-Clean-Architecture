import { AccountModel } from '../../../../domain/models/account'
import { UpdateAccountModel } from '../../../../domain/usecases/update-account'

export interface UpdateAccountRepository {
  update(id: number, accountData: UpdateAccountModel): Promise<AccountModel>
}