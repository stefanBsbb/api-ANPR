
# Node Express API
This Node.js Express API handles vehicle and device data management, generating and storing vehicle information in a database. It ensures that only devices with an active status are used when generating vehicle data. The API also provides full CRUD functionality for managing devices, including search capabilities that allow querying devices based on their model. Sensitive information is managed using environment variables, which are excluded from version control to maintain security.

# Table of Contents

- Environment Setup
- API Endpoints
- Vehicle Data Generation

# Environment Setup
This API uses a .env file to store sensitive information such as database credentials and API keys. To set up the environment, create a .env file in the root of your project and include the following variables:

- DB_HOST=your_database_host
- DB_USER=your_database_user
- DB_PASS=your_database_password
- DB_NAME=your_database_name
- PORT=your_preferred_port
Make sure that .env is listed in your .gitignore to avoid exposing credentials.


# API Endpoints
The API exposes the following endpoints:

### Vehicles
- GET /vehicles: Retrieve a list of all vehicles in the database.

### Devices
- GET /devices: Retrieve a list of all devices with their current statuses.
- GET /devices/active-locations: Retrieve only the locations of devices with an "active" status.
- GET /devices/: Retrieve a specific device by its unique ID.
- POST /devices: Create a new device record.
- PUT /devices/: Update an existing device by its unique ID.
- GET /devices/search/v1: Search for devices using partial matches on name, model, serial number, IP address, and location, or a full match on status.
### Vehicle Data Generation
The API generates mock vehicle data, which includes vehicle type, brand, color, location (based on available devices), and timestamp.
