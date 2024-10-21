const Device = require('../models/deviceModel');
const { Op } = require('sequelize');


class DeviceController {
  static async getAllDevices(req, res) {
    try {
      const devices = await Device.findAll();
      res.json(devices);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching devices' });
    }
  }

  static async getDeviceById(req, res) {
    try {
      const device = await Device.findByPk(req.params.id);
      if (device) {
        res.json(device);
      } else {
        res.status(404).json({ error: 'Device not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching device' });
    }
  }

  static async createDevice(req, res) {
    try {
      const newDevice = await Device.create(req.body);
      res.status(201).json(newDevice);
    } catch (error) {
      res.status(500).json({ error: 'Error creating device' });
    }
  }

  static async updateDevice(req, res) {
    try {
      const updatedDevice = await Device.update(req.body, { where: { id: req.params.id } });
      if (updatedDevice[0] === 1) {
        res.json({ message: 'Device updated successfully' });
      } else {
        res.status(404).json({ error: 'Device not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating device' });
    }
  }

  static async deleteDevice(req, res) {
    try {
      const deletedDevice = await Device.destroy({ where: { id: req.params.id } });
      if (deletedDevice === 1) {
        res.json({ message: 'Device deleted successfully' });
      } else {
        res.status(404).json({ error: 'Device not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting device' });
    }
  }

  static async searchDevices(req, res) {
    try {
      const query = req.query.q;

      if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
      }

      const devices = await Device.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${query}%` } },
            { model: { [Op.like]: `%${query}%` } },
            { serialNumber: { [Op.like]: `%${query}%` } },
            { ipAddress: { [Op.like]: `%${query}%` } },
            { location: { [Op.like]: `%${query}%` } },
            { status: { [Op.eq]: query } }
          ]
        }
      });

      if (devices.length > 0) {
        res.json(devices);
      } else {
        res.status(404).json({ message: 'No devices found' });
      }
    } catch (error) {
      console.error('Error searching devices:', error);
      res.status(500).json({ error: 'Error searching devices' });
    }
  }
}

module.exports = DeviceController;
