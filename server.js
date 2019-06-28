const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);




//write code to compare friend array with inputted array



app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
