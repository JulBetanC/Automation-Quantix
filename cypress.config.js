const { defineConfig } = require("cypress");
const { MongoClient } = require('mongodb');

async function connectToDatabase(query) {
<<<<<<< HEAD
  const uri = "mongodb+srv://cterreros:9qTurY5qxBaVNhYK@portal.dw6kd.mongodb.net/"; // Your MongoDB connection string
=======
  const uri = "your-mongodb-connection-string"; // Your MongoDB connection string
>>>>>>> e3df729ccb4929eebce17376db116fad9db770a0
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
<<<<<<< HEAD
    const database = client.db("quantix-dev"); // Replace with your database name
    const collection = database.collection("orders"); // Replace with your collection name
=======
    const database = client.db("database-name"); // Replace with your database name
    const collection = database.collection("collection-name"); // Replace with your collection name
>>>>>>> e3df729ccb4929eebce17376db116fad9db770a0

    // Perform the query (e.g., find, insert, update, etc.)
    const result = await collection.find(query).toArray(); // Example query

    return result; // Return the result of the query
  } finally {
    await client.close(); // Ensure the client is closed after the query
  }
}
<<<<<<< HEAD
=======

>>>>>>> e3df729ccb4929eebce17376db116fad9db770a0

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test.arportal.io/",
    viewportWidth: 1025,
    viewportHeight: 680,
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase(query) {
          return connectToDatabase(query);
        },
      });
    },
  },
});
