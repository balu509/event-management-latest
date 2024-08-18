const express = require('express');
const router = express.Router();
const { createEvent, updateEventDetails, deleteEventById, registerForEvent } = require('../controllers/eventController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/events', authenticateToken, (req, res) => res.render('events', { events }));
router.post('/events', authenticateToken, createEvent);
router.put('/events/:id', authenticateToken, updateEventDetails);
router.delete('/events/:id', authenticateToken, deleteEventById);
router.post('/events/:id/register', authenticateToken, registerForEvent);

module.exports = router;
