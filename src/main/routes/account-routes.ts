import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/user/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/user/login/login-controller-factory'
import { makeUpdateController } from '../factories/controllers/user/update/update-controller-factory'
import { makeDeleteController } from '../factories/controllers/user/delete/delete-controller-factory'
import { makeGetByIdController } from '../factories/controllers/user/get-by-id/get-by-id-controller-factory'
import { makeGetAllController } from '../factories/controllers/user/get-all/get-all-controller-factory'

export default (router: Router): void => {
  router.get('/index/:id', adaptRoute(makeGetByIdController()))
  router.get('/index', adaptRoute(makeGetAllController()))
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
  router.put('/update', adaptRoute(makeUpdateController()))
  router.delete('/delete', adaptRoute(makeDeleteController()))
}