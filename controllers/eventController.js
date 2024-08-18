const { findEventById, addEvent, updateEvent, deleteEvent } = require('../models/eventModel');

const createEvent = (req, res) => {
    const { title, description, date, time } = req.body;
    const newEvent = { id: events.length + 1, title, description, date, time, participants: [] };
    addEvent(newEvent);
    res.status(201).redirect('/events');
};

const updateEventDetails = (req, res) => {
    const { id } = req.params;
    const { title, description, date, time } = req.body;

    updateEvent(parseInt(id), { title, description, date, time });
    res.redirect('/events');
};

const deleteEventById = (req, res) => {
    const { id } = req.params;
    deleteEvent(parseInt(id));
    res.redirect('/events');
};

const registerForEvent = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const event = findEventById(parseInt(id));
    if (!event) {
        return res.status(404).render('events', { message: 'Event not found' });
    }

    if (event.participants.includes(userId)) {
        return res.status(400).render('events', { message: 'Already registered for this event' });
    }

    event.participants.push(userId);
    res.redirect('/events');
};

module.exports = { createEvent, updateEventDetails, deleteEventById, registerForEvent };
