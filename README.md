# Task Manager App
A task manager application with functions to add, update, remove tasks. User login functionality has been implemented. Login sessions based on JWT (JSON Web Token) authentication strategy. Tokens are encrypted using RSA based private-public key mechanism.

# Features
- Server API based on node.js and express.js
- Database based on MongoDB and accessed through mongoose
- JWT based authentication based on jsonwebtoken
- Server monitoring based on nodemon

# Config
The application expects the following environment variables:
```bash 
PORT
MONGODB_URL
JWT_SECRET
FROM_EMAIL
SENDGRID_API_KEY
```

The develompent, and test environment variables should be placed into the following files:
- Development - ```bash /config/dev.env```
- Test - ```bash /config/test.env```

# Installation
1. Clone or download the repository.
2. Install all the dependencies using the following command.
```bash 
npm install
```

# Usage
Run the application using the following command.
```bash 
npm run dev
```

Or you can test the application using the following command.
```bash 
npm run test
```
