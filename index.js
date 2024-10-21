const http = require('http');
const express = require('express');
const cors = require('cors');
const sequelize = require('./db/dbConfig');
const VehicleController = require('./controllers/vehicleController');
const deviceRouter = require('./routes/deviceRoutes');
const { initializeSocket, broadcastNewVehicle } = require('./socket');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', deviceRouter);

const server = http.createServer(app);

const io = initializeSocket(server);

const vehicleController = new VehicleController(broadcastNewVehicle);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
