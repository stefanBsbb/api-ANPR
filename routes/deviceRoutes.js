const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/deviceController');

router.get('/devices', DeviceController.getAllDevices);
router.get('/devices/:id', DeviceController.getDeviceById);
router.post('/devices', DeviceController.createDevice);
router.put('/devices/:id', DeviceController.updateDevice);
router.delete('/devices/:id', DeviceController.deleteDevice);
router.get('/devices/search/v1', DeviceController.searchDevices);


module.exports = router;
