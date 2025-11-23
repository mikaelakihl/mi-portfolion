import { Router } from 'express';
import { cvData } from '../data/cvData.js';
import { projectData } from '../data/projectData.js';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// CV data route
router.get('/cv', (req, res) => {
  res.json(cvData);
});

// Project data route
router.get('/projects', (req, res) => {
  res.json(projectData);
});

export default router;

