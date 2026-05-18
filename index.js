const express = require("express");
const session = require("express-session");
const router = require("./routers/router");
const app = express();
const path = require('path');
const expressEjsLayouts = require("express-ejs-layouts");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layouts");

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.use(expressEjsLayouts)

app.use(session({
    secret: "budgettracker-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// sequelize.sync({ force: false });


app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
    
})