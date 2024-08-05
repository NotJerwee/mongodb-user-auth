# MongoDB-User-Auth

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


## MongoDB Setup
1. **Create a New Project**: Sign up or log in at [MongoDB](https://www.mongodb.com) and create a new project.

2. **Create a Cluster**: Follow the steps to create a new cluster. For a free tier, you can select the shared cluster option which is sufficient for development purposes.

3. **Create a Database User**:
   - Navigate to the "Database Access" section under "Security".
   - Add a new database user with read and write access to any database. Remember the username and password as you will need them for the connection string.

4. **Whitelist Your IP Address**:
   - Go to the "Network Access" section.
   - Add your current IP address to allow connections to the database.

5. **Connect Your Application**:
   - In the root of your project, create a `.env` file and add the following lines, replacing placeholders with your actual data:
     ```
     MONGODB_URI=your_mongodb_connection_string
     SECRET_KEY=your_secret_key
     ```
   - Find your connection string in the "Connect" section of your cluster.
   - Replace `your_mongodb_connection_string` in your `.env` file with your actual connection string formatted as follows:
     ```
     mongodb+srv://username:password@your-cluster-url/test?retryWrites=true&w=majority
     ```
   - Replace `your_secret_key` with a secret key of your choice for JWT.

## Server Setup
1. Navigate to the server directory:
```
cd server
```

2. Install the necessary packages:
```
npm install
```

3. Start the development server:
```
npm start
```

## Client Setup
1. Navigate to the client directory:
```
cd client
```

2. Install the necessary packages:
```
npm install
```

3. Start the development server:
```
npm start
```

# Tech Stack
[![My Skills](https://skillicons.dev/icons?i=nextjs,react,nodejs,expressjs,js,mongodb,html,css,tailwindcss,)](https://skillicons.dev)
