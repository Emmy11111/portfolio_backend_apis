import express from 'express';
import { contactMe } from '../controllers/users.js';
const router = express.Router();

router.post("/", contactMe);

export default router;