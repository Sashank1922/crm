const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const cors = require('cors');
const customerController = require('./controllers/customerController');
const orderController = require('./controllers/orderController');
const segmentController = require('./controllers/segmentController');
const campaignController = require('./controllers/campaignController');
const deliveryController = require('./controllers/deliveryController');
const app = express();

// app.use(cors({
//     origin: ['https://your-frontend-url.vercel.app'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));

app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/customers', customerController.addCustomer);
app.post('/api/orders', orderController.addOrder);
app.post('/api/segments',segmentController.createAudienceSegment)
app.post('/api/campaigns',campaignController.sendCampaign)
app.post('/api/delivery-receipt',deliveryController.deliveryReceipt)
app.get('/api/getsegments', segmentController.getSegments)
app.get('/api/getcampaigns',campaignController.getCampaigns)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

