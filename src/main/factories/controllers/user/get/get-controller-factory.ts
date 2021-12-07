import { Controller } from "../../../../../presentation/protocols"
import { GetController } from '../../../../../presentation/controllers/get/get-controller'
import { makeDbGetAccount } from "../../../usecases/get-account/db-get-account-factory"

export const makeGetController = (): Controller => {
  return new GetController(makeDbGetAccount())
}
