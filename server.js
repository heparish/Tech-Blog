const path = require('path');
const express = require("express")
const expresSession= require("express-session")
const exphbs =require("express-handlebars")
const sequelize= require("./config/connection")
const routes = require('./controllers');

const app= express();
const PORT = process.env.PORT || 3001;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync().then(()=>{
app.listen(PORT, function() {
    console.log(`App running on port  ${PORT}! ...Click on the link:  http://localhost:${PORT}/`);
  });
})