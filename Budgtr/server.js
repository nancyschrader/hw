const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 3000;

app.use(express.urlencoded());
app.use(methodOverride("_method"));









app.listen(port, () => {
    console.log("Listening on port", port);
});