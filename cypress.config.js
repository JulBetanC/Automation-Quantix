const { defineConfig } = require("cypress");
const { MongoClient } = require('mongodb');

async function connectToDatabase(query) {
  const uri = "mongodb+srv://cterreros:9qTurY5qxBaVNhYK@portal.dw6kd.mongodb.net/"; // Your MongoDB connection string
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("quantix-dev"); // Replace with your database name
    const collection = database.collection("orders"); // Replace with your collection name

    // Perform the query (e.g., find, insert, update, etc.)
    const result = await collection.find(query).toArray(); // Example query

    return result; // Return the result of the query
  } finally {
    await client.close(); // Ensure the client is closed after the query
  }
}

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
