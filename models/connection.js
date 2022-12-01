/////////////////
//Import dependencies
/////////////////////
require("dotenv").config()
const mongoose = require("mongoose")



// setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }

//establish mongoose connection
 mongoose.connect(DATABASE_URL, CONFIG)
//  Eventas for database connection status
mongoose.connection.on("open", ()=>{ console.log("Connected to mongoose") } )
                    .on("close", ()=>{ console.log("Disconnected from mongoose") } )
                    .on("error", (error)=>{ console.log(error) } )

module.exports = mongoose