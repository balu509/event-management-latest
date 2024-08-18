# Virtual Event Management Platform

This project is a backend system for managing virtual events, including user registration, event scheduling, and participant management. The system is built using Node.js and Express.js, following the MVC (Model-View-Controller) architecture pattern. The data is managed in-memory, making it ideal for simple or prototype applications.

## Features

- **User Registration & Login**: Users can register and log in securely using bcrypt for password hashing and JWT for session management.
- **Event Management**: Authenticated users can create, update, delete, and view events. Each event stores information like date, time, description, and participant list.
- **Participant Management**: Users can register for events and view/manage their event registrations.
- **EJS Views**: The application uses EJS templates to render the UI for user interaction.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/balu509/event-management-mvc.git
   cd event-management-mvc
