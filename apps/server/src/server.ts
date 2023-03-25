import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin');
});

// serve up content in the /assets folder
app.use('/assets', express.static(path.resolve(__dirname, './assets')));

// serve up content in the /media folder
app.use('/media', express.static(path.resolve(__dirname, './media')));

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        mongoURL: process.env.MONGO_URL,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
            payload.logger.info(`Base URL: ${process.env.BASE_URL}`);
            payload.logger.info(`Port: ${process.env.PORT}`);
        },
    });

    // Add your own express routes here

    // Create an express api endpoint to be able to sign up the user
    app.post('/api/signup', async (req, res) => {
        const { email, password, firstName, lastName } = req.body;

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ success: false, message: 'Missing email/password/first/last name' });
        }

        const newUser = await payload.create({
            collection: 'users',
            data: {
                email,
                password,
                firstName,
                lastName,
            },
        });

        if (newUser.id) {
            return res.status(200).json({ success: true, message: 'User created' });
        }

        return res.status(401).json({ success: false });
    });

    app.listen(process.env.PORT || 3002);
};

start();
