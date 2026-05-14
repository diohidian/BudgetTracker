const express = require("express");
const router = require("./routers/router");
const app = express();
const path = require('path')

const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
    
})