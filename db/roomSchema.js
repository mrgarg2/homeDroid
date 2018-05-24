const mongoose = require('./connection')

var Schema = mongoose.Schema;

var RoomSchema = new Schema(
    {
        TimeStamp:Date,
        roomMac:String,
        deviceList:Array,
        name:String, //Change to Nick Name
        type:String,        
        //occupancy: String,
        // tempHigh:String,
        // tempLow:String,
        // roomTemp:Number,
        ip:String
    }
);

var RoomCollection = mongoose.model("rooms",RoomSchema);

module.exports = RoomCollection;

