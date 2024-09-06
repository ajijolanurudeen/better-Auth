const mongoose =  require("mongoose");

module.exports = ()=>{
    const connectionParams = {
        
    };
    try {
        mongoose.connect(process.env.DB,connectionParams);
        console.log("connected to database sucessfully")
    } catch (error) {
        console.log(error)
        console.log("couldnt connect to database")
    }
}