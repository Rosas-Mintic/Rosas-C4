import { Router } from 'express';
import { } from '../controllers/user.controllers.js';

const router = Router();

router.get('/user', getUser)
router.post('/user', createUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)


export default router