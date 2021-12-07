import {
  HttpRequest,
  HttpResponse,
  Controller,
  GetAccount,
} from './get-controller-protocols'
import { serverError, ok } from '../../helpers/http/http-helper'

export class GetController implements Controller {

  constructor(
    private readonly getAccount: GetAccount
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {

      const account = await this.getAccount.get()

      return ok(account)
    } catch (error) {
      return serverError()
    }
  }

}