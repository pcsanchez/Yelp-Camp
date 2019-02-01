var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e837b10c2afc083ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Mountain Goats rest", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e837b10c2afc083ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Mountain Goats rest", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e837b10c2afc083ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"},
    {name: "Mountain Goats rest", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
})


app.listen(3000, function(){
    console.log("Server has started");
});