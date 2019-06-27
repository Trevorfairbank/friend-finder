

app.get("/survey", (req,res)=>{
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "home.html"));
});
