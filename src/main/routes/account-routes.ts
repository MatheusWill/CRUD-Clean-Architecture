import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/user/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/user/login/login-controller-factory'
import { makeUpdateController } from '../factories/controllers/user/update/update-controller-factory'
import { makeDeleteController } from '../factories/controllers/user/delete/delete-controller-factory'
import { makeGetController } from '../factories/controllers/user/get/get-controller-factory'

export default (router: Router): void => {
  router.get('/index', adaptRoute(makeGetController()))
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
  router.put('/update', adaptRoute(makeUpdateController()))
  router.delete('/delete', adaptRoute(makeDeleteController()))
}