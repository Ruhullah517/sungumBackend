const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const userRoutes = require('./src/routes/userRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const staffRoutes = require('./src/routes/staffRoutes');
const menuRoutes = require('./src/routes/menuRoutes');
const galleryRoutes = require('./src/routes/galleryRoutes');
const incomeRoutes = require('./src/routes/incomeRoutes');
const roomRoutes = require('./src/routes/roomRoutes');
const roomBookingRequests = require('./src/routes/bookingRequestsRoutes');
const eventBookingRequests = require('./src/routes/eventRequestsRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const loginRoutes = require('./src/routes/loginRoutes')
const authRoutes = require('./src/routes/authRoutes');
const resetPassword = require('./src/routes/resetpassRoutes')
const db = require('./src/config/database');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Serve static files (uploaded images)
app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/room-booking-requests', roomBookingRequests);
app.use('/api/events', eventRoutes);
app.use('/api/event-booking-requests', eventBookingRequests);
app.use('/api', loginRoutes);
app.use('/api', authRoutes);
app.use('/api/auth', resetPassword);



module.exports = app;