import { Router } from 'express';
import { cvData } from '../data/cvData.js';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// CV data route
router.get('/cv', (req, res) => {
  res.json(cvData);
});

export default router;

