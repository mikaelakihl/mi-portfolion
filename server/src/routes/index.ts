import { Router } from 'express';
import { cvData } from '../data/cvData.js';
import { projectData } from '../data/projectData.js';
import { artData } from '../data/artData.js';

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

// Art data route
router.get('/art', (req, res) => {
  res.json(artData);
});

// Single Art data route
router.get('/art/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const art = artData.find((item) => item.id === id);

  if (art) {
    res.json(art);
  } else {
    res.status(404).json({ message: 'Art not found' });
  }
});

export default router;

