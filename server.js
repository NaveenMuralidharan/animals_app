//////////////////////
// Import dependencies
//////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const animals = require("./models/animals")
const seed = require("./models/seed")
const Animal = require("./models/animals")



const app = express()

///////////////////////////////////
//MIDDLEWARE
///////////////////////////////////
app.use(morgan("tiny"))//logging
app.use(methodOverride("_method"))//catch requests with _method
app.use(express.urlencoded( { extended: true } ))//parse url encoded request bodies



// ROUTES
//INDEX route:

app.get('/', (req, res)=>{
    res.send("Animals app home page")
})

// seed route
app.get("/seed", (req, res)=>{
    console.log(seed)
    console.log("entering /seed route")

    // delete all existing db entries
    Animal.deleteMany({}, (err, data)=>{
        console.log("Entering deletion success callback")
        // create new entries
        Animal.create(seed, (err, data)=>{
            console.log("from creation suceessful callback")
            res.send(data)
        })
    })
})

// Index route
app.get("/animals", (req, res)=>{

    Animal.find({}, (err, data)=>{
        res.render("index.ejs", { animals: data })
    })

})

// Show route
app.get("/animals/:id", (req, res)=>{
    
    // find the animal by id 
    Animal.findById(req.params.id, (err, data)=>{
        res.render("show.ejs", { animal : data })
    })

})

app.listen(PORT, ()=>{
    console.log("App is running on PORT "+ PORT)
})

