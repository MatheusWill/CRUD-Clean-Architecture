import {
  HttpRequest,
  HttpResponse,
  Controller,
  DeleteAccount,
  Validation
} from './delete-controller-protocols'
import { serverError, ok, conflict, notFound } from '../../helpers/http/http-helper'

export class DeleteController implements Controller {

  constructor(
    private readonly DeleteAccount: DeleteAccount,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const error = this.validation.validate(httpRequest.body)
      if (error) return notFound(error)

      const { email } = httpRequest.body

      await this.DeleteAccount.delete({email})
      
      return ok()

    } catch (error) {
      switch (error.message) {
        case 'ACCOUNT_EMAIL_NOT_EXISTING':
          return conflict(error)
        default:
          console.error(error)
          return serverError()
      }
    }
  }

}