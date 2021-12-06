import { Controller } from "../../../../../presentation/protocols"
import { UpdateController } from '../../../../../presentation/controllers/update/update-controller'
import { makeSignUpValidation } from "./update-validation-factory"
import { makeDbAuthentication } from '../../../usecases/authentication/db-authentication-factory'
import { makeDbUpdateAccount } from "../../../usecases/update-account/db-update-account-factory"

export const makeUpdateController = (): Controller => {
  return new UpdateController(makeDbUpdateAccount(), makeSignUpValidation(), makeDbAuthentication())
}