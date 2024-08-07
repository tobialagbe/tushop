import { Router } from 'express';
import { distribute } from '../controllers/goodieController';

const router = Router();

router.post('/goodies', distribute);

export default router;