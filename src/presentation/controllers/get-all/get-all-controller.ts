import {
  HttpRequest,
  HttpResponse,
  Controller,
  GetAllAccountModel,
} from './get-all-controller-protocols'
import { serverError, ok } from '../../helpers/http/http-helper'

export class GetAllController implements Controller {

  constructor(
    private readonly getAllAccount: GetAllAccountModel
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {

      const account = await this.getAllAccount.getAll()

      return ok(account)
    } catch (error) {
      return serverError()
    }
  }

}