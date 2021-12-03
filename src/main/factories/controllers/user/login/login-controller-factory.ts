import env from '../../../../config/env'
import { Controller } from '../../../../../presentation/protocols'
import { LoginController } from '../../../../../presentation/controllers/login/login-controller'
import { makeLoginUpValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../../usecases/authentication/db-authentication-factory'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginUpValidation())
}