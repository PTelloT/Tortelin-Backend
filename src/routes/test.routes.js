import { Router } from "express"
import * as testCtrl from '../controllers/test.controller'

const router = Router()

router.get('/', testCtrl.showTest)
router.get('/users', testCtrl.getUsers)
router.post('/users', testCtrl.createUser)

export default router;