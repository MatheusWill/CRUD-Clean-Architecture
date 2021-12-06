import { DeleteAccountModel } from '../../../../domain/usecases/user/delete-account'

export interface DeleteAccountRepository {
  delete(deleteAccountModel: DeleteAccountModel): Promise<any>
}