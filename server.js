const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./db/database');

const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'super-secret-key-for-task-02',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Protect Dashboard Route
app.get('/dashboard.html', (req, res, next) => {
    if (!req.session.adminId) {
        return res.redirect('/');
    }
    next();
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
