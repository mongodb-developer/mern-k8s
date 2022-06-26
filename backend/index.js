const express = require("express");
require("dotenv").config()

const PORT = process.env.PORT;
const CONN_STR = process.env.CONN_STR;

let DB_CONNECTED = false;

const getMongoDB = async () => {
    const MongoClient = require('mongodb').MongoClient;
    let logConnString = CONN_STR.replace(/\/(.*:.*)@/, "//----:----@");
    console.log(`Connecting to database using ${logConnString}`);
    let db;
    try {
      const client = await MongoClient.connect(CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
      db = await client.db("mern-k8s");
      DB_CONNECTED = true;  
    } catch (e) {
      console.log(e.toString());
    }
    return db;
  }
  let db;
  getMongoDB().then(_db => db = _db);

let app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));