const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendConfirmationEmail = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: booking.email,
            subject: 'Room Booking Confirmation',
            html: `
               <h1>Booking Confirmed!</h1>
               <p>Dear ${booking.booked_by},</p>
               <p>Your room booking has been confirmed for Room ${booking.room_number}.</p>
               <p>Check-in: ${booking.checkin_date}</p>
               <p>Check-out: ${booking.checkout_date}</p>
               <p>Total Amount: Rs.${booking.total_payment}</p>
               <p>Paid Amount: Rs.${booking.paid_amount}</p>
               <p>Payment Status: ${booking.payment_status}</p>
               <p>Remaining Amount: Rs.${booking.total_payment - booking.paid_amount}</p>
               <br>
               <p>Thank you for choosing our hotel!</p>
               <p>Waiting to welcome you!</p>
               <p>Sungum Hotel & Event Managment Company</p>
               <p>Skardu</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};
const sendRejectionEmail = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: booking.email,
            subject: 'Room Booking Request Rejected',
            html: `
               <h1>Booking Request Rejected</h1>
               <p>Dear ${booking.booked_by},</p>
               <p>We regret to inform you that your room booking request for Room ${booking.room_number} has been rejected.</p>
               <p>If you have any questions, please contact us.</p>
               <p>At your service.</p>
               <p>Sungum Hotel & Event Managment Company</p>
               <p>Skardu</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

const sendEventConfirmationEmail = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: booking.email,
            subject: 'Event Booking Confirmation',
            html: `
               <h1>Booking Confirmed!</h1>
               <p>Dear ${booking.booked_by},</p>
               <p>Your Event hall booking has been confirmed for ${booking.event_name}.</p>
               <p>Booking-date: ${booking.booking_date}</p>
               <p>Time: ${booking.booking_time}</p>
               <p>Total Amount: Rs.${booking.total_payment} (Menu Charges Excluded)</p>
               <p>Paid Amount: Rs.${booking.paid_amount}</p>
               <p>Payment Status: ${booking.payment_status}</p>
               <p>Remaining Amount: Rs.${booking.total_payment - booking.paid_amount}</p>
               <br>
               <p>Thank you for choosing our hotel!</p>
               <p>At your service</p>
               <p>Sungum Hotel & Event Managment Company</p>
               <p>Skardu</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

const sendEventRejectionEmail = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: booking.email,
            subject: 'Event Hall Booking Request Rejected',
            html: `
               <h1>Booking Request Rejected</h1>
               <p>Dear ${booking.booked_by},</p>
               <p>We regret to inform you that your hall booking request for ${booking.event_name} has been rejected.</p>
               <p>If you have any questions, please contact us.</p>
               <p>At your service.</p>
               <p>Sungum Hotel & Event Managment Company</p>
               <p>Skardu</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};


const eventRequestUpdate = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Event Booking Request',
            html: `
               <h2>New Booking Request Received</h2>
                <p><strong>Event Name:</strong> ${booking.event_name}</p>
                <p><strong>Booked By:</strong> ${booking.booked_by}</p>
                <p><strong>Booking Date:</strong> ${booking.booking_date} at ${booking.booking_time}</p>
                <p><strong>Number of Guests:</strong> ${booking.number_of_guests}</p>
                <p><strong>Total Payment:</strong> PKR ${booking.total_payment}</p>
                <p><strong>Paid Amount:</strong> PKR ${booking.paid_amount} (${booking.payment_status})</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>CNIC:</strong> ${booking.cnic}</p>
                <p><strong>Stage:</strong> ${booking.stage}</p>
                <p><strong>Menu:</strong> ${booking.menu}</p>
                <p><strong>Services:</strong> ${booking.services}</p>
                <br>
                <p>Check the event booking request page in admin panel for more details.</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

const roomRequestUpdate = async (booking) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Room Booking Request',
            html: `
               <h2>New Booking Request Received</h2>
                <p><strong>Room Number:</strong> ${booking.room_number}</p>
                <p><strong>Booked By:</strong> ${booking.booked_by}</p>
                <p><strong>CheckIn Date:</strong> ${booking.checkin_date}</p>
                <p><strong>CheckOut Date:</strong> ${booking.checkout_date}</p>
                <p><strong>Total Payment:</strong> PKR ${booking.total_payment}</p>
                <p><strong>Paid Amount:</strong> PKR ${booking.paid_amount} (${booking.payment_status})</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>CNIC:</strong> ${booking.cnic}</p>
                <br>
                <p>Check the room booking request page in admin panel for more details.</p>
           `
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    sendConfirmationEmail,
    sendRejectionEmail,
    sendEventConfirmationEmail,
    sendEventRejectionEmail,
    eventRequestUpdate,
    roomRequestUpdate
};