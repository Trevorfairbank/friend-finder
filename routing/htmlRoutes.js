const path = require("path");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//When I run this my /api/friends doesn't work.
    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

};
