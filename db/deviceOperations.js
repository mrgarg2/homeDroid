const DeviceCollection = require('./deviceSchema');

const DeviceOperations = {

    registerDevice(deviceObject, res) {
        DeviceCollection.create(deviceObject, function (err) {
            if (err) {
                console.log("Cannot Register due to " + err);
                res.send("Cannot register fue to " + err);
            }
            else {
                console.log("Registration successful");
                res.send("Registration successful");
            }
        })
    },

    getDeviceStatus(deviceID, res) {
        DeviceCollection.find({ deviceID: deviceID }, function (err, docs) {
            if (err) {
                console.log('Error occured while finding device', err);
            }
            else {
                if (docs && docs.length > 0) {
                    console.log("Device Status is ", docs);
                    console.log("Type of Object is ", typeof docs);
                    var deviceObject = docs[0];
                    console.log("Device Object is", deviceObject);
                    console.log("Docs NAme is ", docs[0].name);
                    res.send(docs[0]);
                    // res.write("Device Type is " + deviceObject.type);
                    // res.write("Device Status is " + deviceObject.status);
                }
                else {
                    console.log('No such device found!');
                }
            }
        })
    },

    getDevices(macAdd,roomObject,res) {
        DeviceCollection.find({ deviceID: '123' }, function (err, docs) {
            if (err) {
                console.log("Cannot find devices due to " + err);
            }
            else {
                if (docs && docs.length>0) {
                    roomObject.deviceList = docs[0];
                    res.send(roomObject);
                }
                else {
                    console.log("No such object");
                }
            }
        });

    }

}

module.exports = DeviceOperations;