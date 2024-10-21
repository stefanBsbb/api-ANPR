const Vehicle = require('../models/vehicleModel');
const Device = require('../models/deviceModel');

class VehicleController {
  constructor(broadcastNewVehicleFn) {
    this.broadcastNewVehicle = broadcastNewVehicleFn;
    this.startGeneratingVehicleData();
  }

  async getAvailableDeviceLocations() {
    try {
      const devices = await Device.findAll({ 
        attributes: ['location'],
        where: { status: 'active' }
      });
      return devices.map(device => device.location);
    } catch (error) {
      console.error('Error fetching device locations:', error);
      return [];
    }
  }
  
  async generateMockVehicleData() {
    const vehicleTypes = ['Car', 'Truck', 'Bus', 'Motorcycle'];
    const brands = ['Toyota', 'Ford', 'BMW', 'Tesla'];
    const colors = ['Red', 'Blue', 'Black', 'White'];

    const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const availableLocations = await this.getAvailableDeviceLocations();

    return {
      registrationNumber: 'XYZ-' + Math.floor(Math.random() * 9000 + 1000),
      vehicleType: randomElement(vehicleTypes),
      brand: randomElement(brands),
      color: randomElement(colors),
      location: randomElement(availableLocations),
      timestamp: new Date()
    };
  }

  startGeneratingVehicleData() {
    setInterval(async () => {
      try {
        const newVehicleData = await this.generateMockVehicleData();
        const newVehicle = await Vehicle.create(newVehicleData);

        console.log('Generated and saved new vehicle with id:', newVehicle.id);
        if (this.broadcastNewVehicle) {
          this.broadcastNewVehicle(newVehicle);
        }
      } catch (error) {
        console.error('Error generating or saving vehicle:', error);
      }
    }, 50000);
  }
}

module.exports = VehicleController;
