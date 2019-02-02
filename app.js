var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose");


mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://pixabay.com/get/e837b10c2afc083ed1584d05fb1d4e97e07ee3d21cac104491f9c17ca0ebbdbe_340.jpg",
//         description: "This is a huge granite hill, no bathrooms. No Water. Beautiful granite!"

//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else{
//             console.log("New campground created: ");
//             console.log(campground);
//         }
//     });

//Index - show all campgrounds
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){

    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campground to db
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            res.render("show", {campground: foundCampground});
        }
    });
})


app.listen(3000, function(){
    console.log("Server has started");
});