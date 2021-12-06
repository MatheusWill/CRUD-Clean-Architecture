import { Controller } from "../../../../../presentation/protocols"
import { DeleteController } from '../../../../../presentation/controllers/delete/delete-controller'
import { makeDeleteValidation } from "./delete-validation-factory"
import { makeDbDeleteAccount } from "../../../usecases/delete-account/db-delete-account-factory"

export const makeDeleteController = (): Controller => {

  return new DeleteController(makeDbDeleteAccount(), makeDeleteValidation())
}
