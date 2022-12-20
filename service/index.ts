import express from 'express'
import helmet from 'helmet'
import config from 'config'
import cors from 'cors'
import { usersRouter } from './apis'
import { noRouteHandler } from './common/noRouteHandler'
import { expressMiddleware } from './common/logger'

const serviceName = config.get('serviceName')
// const version = config.get('version')

const app = express()
const port = process.env.PORT || 3005
const ALLOWED_ORIGIN: string = config.get('allowedOrigin')
const ALLOWED_ORIGIN_ARRAY = ALLOWED_ORIGIN.split(',').map(item => item.trim())
const environment = process.env.NODE_ENV

const initRoutes = () => {
  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(expressMiddleware())
  app.use(
    cors({
      origin: ALLOWED_ORIGIN_ARRAY,
      credentials: true,
    })
  )

  app.get('/health', (req, res) => {
    res.status(200).send({ data: { serviceName, environment } })
  })
  app.use('/api/v1', usersRouter)

  app.use(noRouteHandler)
  app.listen(port, () => {
    console.log('server is up and running on port: ', port)
    // logger.info('server is listening on port ' + port);
  })
}

let bootstrap = () => {
  initRoutes()
}

bootstrap()
