var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f8c87caee9bcba_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/e837b10c2afc083ed1584d05fb1d4e97e07ee3d21cac104491f8c87caee9bcba_340.jpg"},
        {name: "Mountain Goats rest", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104491f8c87caee9bcba_340.jpg"}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
    console.log("Server has started");
});