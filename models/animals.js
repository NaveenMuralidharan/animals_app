////////////
//Import dependencies
////////////

const mongoose = require("./connection")

const { Schema, model } = mongoose

// Declare schema
const animalSchema = new Schema ( {
    
                                    species: String,
                                    extinct: Boolean,
                                    location: String,
                                    lifeExpectancy: Number, 
    
                                } )

//create model with new schema
const Animal = model("Animal", animalSchema)

//////////////////////
// Export Animal model
//////////////////////

module.exports = Animal