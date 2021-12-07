import {
  HttpRequest,
  HttpResponse,
  Controller,
  UpdateAccount,
  Authentication,
  Validation
} from './update-controller-protocols'
import { badRequest, serverError, ok, conflict } from '../../helpers/http/http-helper'

export class UpdateController implements Controller {

  constructor(
    private readonly updateAccount: UpdateAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {

      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)

      const { name, email, password } = httpRequest.body
      const { id } = httpRequest.params

      if (!id) return badRequest(error)

      const account = await this.updateAccount.update(id, {
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