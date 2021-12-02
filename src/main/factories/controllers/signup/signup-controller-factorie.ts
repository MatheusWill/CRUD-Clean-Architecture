import { Controller } from "../../../../presentation/protocols"
import { SignUpController } from '../../../../presentation/controllers/signup/signup-controller'
import { makeSignUpValidation } from "./signup-validation-factorie"
import { makeDbAuthentication } from '../../usecases/authentication/db-authentication-factory'
import { makeDbCreateAccount } from "../../usecases/create-account/db-create-account-factory"

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeDbCreateAccount(), makeSignUpValidation(), makeDbAuthentication())
}
