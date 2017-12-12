var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./routing/htmlroutes.js");
var apiRoutes = require("./routing/apiroutes.js");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



htmlRoutes(app);
apiRoutes(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
