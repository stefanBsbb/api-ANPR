const { Server } = require('socket.io');
const Vehicle = require('./models/vehicleModel');

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: true,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    console.log('Client connected via WebSocket');
    Vehicle.findAll().then(vehicles => {
      socket.emit('initial', vehicles);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

const broadcastNewVehicle = (vehicle) => {
  if (io) {
    console.log('Broadcasting new vehicle with id:', vehicle.id);
    io.emit('new', vehicle);
  } else {
    console.error('Socket.IO not initialized!');
  }
};

module.exports = {
    initializeSocket,  
  broadcastNewVehicle
};
