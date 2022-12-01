//////////////////
//Import dependencies
///////////////////
const mongoose = require("./connection")
const Animal = require("./animals")


// seed code
mongoose.connection("open", ()=>{
    const animals = [
        { 
            species: "Wolfhound",
            extinct: false,
            location: "United Kingdom",
            lifeExpectancy: 14 
        },
        { 
            species: "Panther",
            extinct: false,
            location: "Africa",
            lifeExpectancy: 20 
        },
        { 
            species: "Dragon",
            extinct: true,
            location: "Alberta",
            lifeExpectancy: 100 
        },
        { 
            species: "Mountain lion",
            extinct: false,
            location: "Asia",
            lifeExpectancy: 13 
        },
        { 
            species: "Unicorn",
            extinct: true,
            location: "Arabia",
            lifeExpectancy: 26 
        }
    
    ]

    // delete all old animals in db
    Animal.deleteMany({}, (err, data)=>{

        // after deletion, in callback, seed db
        Animal.create(animals, (err, data)=>{
            // log created aninals
            console.log("SEED - animals===============")
            console.log(data)
            console.log("SEED - animals===============")

            // close the db connection
            mongoose.connection.close()
        })


    })
})


