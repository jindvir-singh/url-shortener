import express from 'express';
import { _generateNewShortURL } from '../controllers/url.js';

const router = express.Router();

router.post('/', _generateNewShortURL)

export default router;