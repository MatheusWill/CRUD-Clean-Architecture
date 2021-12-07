import { Controller } from "../../../../../presentation/protocols"
import { GetAllController } from '../../../../../presentation/controllers/get-all/get-all-controller'
import { makeDbGetAllAccount } from "../../../usecases/get-all-account/db-get-all-account-factory"

export const makeGetAllController = (): Controller => {
  return new GetAllController(makeDbGetAllAccount())
}
