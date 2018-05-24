const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Server = require('./server');
const Client = require('./TcpClient');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/registerDevice',(req,res)=>{
    var id = req.body.id;
    var roomId = req.body.roomId;
    var name = req.body.name;
    var type = req.body.type;
    var status = req.body.status;

    var Device = require('./models/Device');
    var DeviceOperations = require('./db/deviceOperations');
    var deviceObject = new Device(id,roomId,name,type,status);

    DeviceOperations.registerDevice(deviceObject,res);

})

app.post('/deviceStatus',(req,res)=>{
    var deviceID = req.body.deviceID;

    var DeviceOperations = require('./db/deviceOperations');
    var deviceObject = DeviceOperations.getDeviceStatus(deviceID,res);
    console.log("Device object is " +  deviceObject);
    //res.send("Finding Device");
    // re.send("Device Name is " + deviceObject.name);
    // res.send("Device Type is " + deviceObject.type);
    // res.send("Device Status is " + deviceObject.status);


})

app.post('/roomRegistration',(req,res)=>{
    var Mac = req.body.Mac;
    var name = req.body.roomName;
    var ip = req.body.nodeIP;

    var RoomOperations = require('./db/roomOperations');
    var Room = require('./models/Room');
    var roomObject = new Room(Mac,name,ip);
    console.log("Room Object is ",roomObject);
    RoomOperations.registerRoom(roomObject,res);
})

app.post('/roomDetails',(req,res)=>{
    var roomId = req.body.Mac;

    var RoomOperations = require('./db/roomOperations');
    RoomOperations.getRoomDetails(roomId,res);
})

app.listen(3000,()=>{
    console.log("Server Liseniing at port 3000..."+new Date())
});

function getData(){
    Client.write("{}")
}

Server.listen();