import { Controller } from "../../../../../presentation/protocols"
import { GetByIdController } from '../../../../../presentation/controllers/get-by-id/get-by-id-controller'
import { makeDbGetAccountById } from "../../../usecases/get-account-by-id/db-get-account-by-id-factory"
import { makeGetByIdValidation } from "./get-by-id-validation-factory"

export const makeGetByIdController = (): Controller => {
  return new GetByIdController(makeDbGetAccountById(), makeGetByIdValidation())
}
