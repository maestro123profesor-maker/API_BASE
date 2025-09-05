import { Router } from 'express'
import { EjemploController } from './ejemplo.controller.js'
import { authCookieMiddleware } from '../../core/middlewares/authCookie.js';

export const ejemploRouter = () => {
  
    const ejemploRouter = Router()
    const ejemploController = new EjemploController()
 
    ejemploRouter.post('/consulta', authCookieMiddleware, ejemploController.consulta)
   
    return ejemploRouter
}
