require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
const ac = require("./controller/authController");
const mc = require("./controller/mainController");


app.use(json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Your database is connected!")
});

// User Section

app.post("/auth/login", ac.login);
app.post("/auth/register", ac.register);
app.get("/auth/user", ac.user);

// Information

app.get("/information/all", mc.getInformation);
app.delete("/information/deleteInformation/:id", mc.deleteInformation);


app.listen(process.env.EXPRESS_PORT || 3056, () => {
    console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});