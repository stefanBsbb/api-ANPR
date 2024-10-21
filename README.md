Node Express API
This is a Node.js Express API for managing vehicle and device data. The API generates vehicle data and stores it in a database, while fetching available locations from devices. It also ensures that only devices with an active status are used when generating vehicle data. The API is secured with environment variables, with sensitive information excluded from version control.


Table of Contents
Environment Setup
API Endpoints
Vehicle Data Generation

Environment Setup
This API uses a .env file to store sensitive information such as database credentials and API keys. To set up the environment, create a .env file in the root of your project and include the following variables:

env
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
PORT=your_preferred_port
Make sure that .env is listed in your .gitignore to avoid exposing credentials.


API Endpoints
The API exposes the following endpoints:

Vehicles
GET /vehicles: Retrieve a list of all vehicles in the database.
POST /vehicles: Add a new vehicle (generated with random data based on available devices).
Devices
GET /devices: Retrieve a list of all devices with their current statuses.
GET /devices/active-locations: Retrieve only the locations of devices with an "active" status.
Vehicle Data Generation
The API generates mock vehicle data, which includes vehicle type, brand, color, location (based on available devices), and timestamp.

