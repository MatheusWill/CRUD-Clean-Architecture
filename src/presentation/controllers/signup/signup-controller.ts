import {
  HttpRequest,
  HttpResponse,
  Controller,
  CreateAccount,
  Authentication,
  Validation
} from './signup-controller-protocols'
import { badRequest, serverError, ok, conflict } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {

  constructor(
    private readonly createAccount: CreateAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {

      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)

      const { name, email, password } = httpRequest.body

      const account = await this.createAccount.create({
        name,
        email,
        password
      })

      const accessToken = await this.authentication.auth({
        email,
        password
      })

      return ok({ account: account, accessToken: accessToken })
    } catch (error) {

      switch (error.message) {
        case 'ACCOUNT_EMAIL_EXISTING':
          return conflict(error)
        default:
          return serverError()
      }

    }
  }

}