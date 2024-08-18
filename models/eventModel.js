const events = [];

const findEventById = (id) => events.find(event => event.id === id);
const addEvent = (event) => events.push(event);
const updateEvent = (id, updatedEvent) => {
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events[index] = { ...events[index], ...updatedEvent };
    }
};
const deleteEvent = (id) => {
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events.splice(index, 1);
    }
};

module.exports = { events, findEventById, addEvent, updateEvent, deleteEvent };