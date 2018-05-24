const mongoose = require('./connection');

var Schema = mongoose.Schema;
var DeviceSchema = new Schema({
    deviceID:Number,
    roomID:String,
    name:String,
    type:String,
    //  occupancy:Boolean,
    //  tempHigh:Boolean,
    //  tempLow:Boolean,
    status:Boolean

},{
    timestamps:{
        createdAt:''
    }
}
);

console.log("Inside Device Schema");
var DeviceCollection = mongoose.model("devices",DeviceSchema);

module.exports = DeviceCollection;