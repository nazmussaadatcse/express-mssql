import { Router } from "express";
import personController from "../controllers/person.controller.js";
const apiRouter = Router();


apiRouter.get('/person' , personController.getAllPersons )



export default apiRouter;