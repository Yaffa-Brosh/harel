import { Router, Request, Response } from 'express'
import * as userServices from './services'
import { handleError } from '../../common/errorHandler'

const router = Router()
const usersRouter = Router()

usersRouter.use('/users', router)

router.get('', async (req: Request, res: Response) => {
  userServices
    .getAll()
    .then(result => {
      res.status(200).send({ data: result, err: null })
    })
    .catch(error => handleError(req, error))
})

router.post('', async (req: Request, res: Response) => {
  let email = req.body.email
  userServices
    .checkUser(email)
    .then(result => {
      res.status(200).send({ data: result, err: null })
    })
    .catch(error => handleError(req, error))
})

router.get('/:id', async (req: Request, res: Response) => {
  let id = req.params.id
  userServices
    .byId(id)
    .then((result: any) => {
      console.log(result);
      
      res.status(200).send({ data: result, err: null })
    })
    .catch((error: any) => handleError(req, error))
})

router.put('/:id', async (req: any, res: Response) => {
  let id = req.params.id
  let toUpdate = req.body
  userServices
    .update(id, toUpdate)
    .then((result: any) => {
      res.status(200).send({ data: result, err: null })
    })
    .catch((error: any) => handleError(req, error))
})

export { usersRouter }
