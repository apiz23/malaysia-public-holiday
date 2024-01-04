# Malaysia Public Holiday API

A simple RESTful API built with Express.js, Node.js, and MongoDB to provide information about public holidays in Malaysia.

## Features

- Retrieve a list of upcoming public holidays.
- Add new public holidays to the database.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/malaysia-public-holiday-api.git
   cd malaysia-public-holiday-api
   
2. Install dependencies:

   ```bash
   npm install

3. Set up MongoDB:
    Ensure you have MongoDB installed locally or provide a connection URI in the .env file.

4. Start the server:

    ```bash
    npm start

    ````
    The API will be available at http://localhost:3000.


## **API Endpoints**
- GET /publicHoliday: Get a list of all public holidays.
- GET /publicHoliday/johor: Get a list of public holidays details for state JOHOR only.
