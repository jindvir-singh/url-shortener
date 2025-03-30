import express from 'express';
import { _generateNewShortURL, _updateVisitHistory} from '../controllers/url.js';

const router = express.Router();

router.post('/', _generateNewShortURL);
router.get("/:shortId", _updateVisitHistory);

export default router;