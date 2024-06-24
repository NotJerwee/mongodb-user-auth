# mongodb-user-auth

A template to create a user authentication using MongoDB

# Installation
1. Clone the repository:
```
https://github.com/yourusername/mongodb-user-auth.git
```
or download zip folder and extract it.

2. Change to the project directory:
```
cd mongodb-user-auth
```

## Server Setup
1. Navigate to the server directory (assuming you are in the root of the project):
```
cd server
```

2. Install the necessary packages:
```
npm install
```

### MongoDB Setup
- Create a .env file in the root directory.
- Replace `your_mongodb_connection_string` and `your_secret_key` with your actual MongoDB connection string and a secret key for JWT.
```
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```








