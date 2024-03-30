# ReviewSystem Application

Review-System is a sophisticated platform crafted with EJS, Bootstrap, Node.js, Express, and MongoDB. It provides secure CRUD functionalities and a robust authentication system, ensuring seamless review and rating operations. Its intuitive design facilitates efficient feedback management for enhanced user experiences.


## Technologies Used

Review-System utilizes the following technologies:
- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js, facilitating API development.
- **EJS (Embedded JavaScript):** Templating engine for server-side rendering.
- **MongoDB:** NoSQL database for storing review data.
- **JWT:** JSON Web Tokens for authentication and authorization.
- **Other Node.js packages:** Various npm packages for additional functionalities.

## Local Setup

1. Clone the repository:
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the .env.example file to .env:
   ```bash
   cp .env.example .env
   ```
4. Open the .env file and update the MONGODB_URL with your local MongoDB connection string.

   ```bash
    # MongoDB Connection URL
   MONGO_DB_URI="mongodb://your-mongodb-url"

   PORT = ...
   JWT_SECRET = "Secret Key here"
   NODE_ENV = ...
