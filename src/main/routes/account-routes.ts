import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/user/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/user/login/login-controller-factory'
import { makeUpdateController } from '../factories/controllers/user/update/update-controller-factory'
import { makeDeleteController } from '../factories/controllers/user/delete/delete-controller-factory'


export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
  router.put('/update', adaptRoute(makeUpdateController()))
  router.delete('/delete', adaptRoute(makeDeleteController()))
}