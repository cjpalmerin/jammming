const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//STATIC ASSETS
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//SERVER LISTENING
app.listen(PORT, function() {
    console.log(`Server is listening on http://localhost/$(PORT)`)
})
