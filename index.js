const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const { connect } = require('getstream');

const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app
 .use(express.json())
 .use(cors())
 .use(urlencoded());

 const api_key = process.env.STREAM_API_KEY;
 const api_secret = process.env.STREAM_SECRET;
 const app_id = process.env.STREAM_APP_ID;

 const serverClient = connect(api_key, api_secret, app_id); 

app.post("/getToken", (req, res) => {
    const userId = req.body.userId;
    const token = serverClient.createUserToken(userId);
    res.send({token});
});

app.listen(PORT, (req, res) => {
    console.log(`server listening on http://localhost:${PORT}`);
});


