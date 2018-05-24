const RoomCollection = require('./roomSchema');

const RoomOperations = {

    registerRoom(roomObject,res){
        RoomCollection.create(roomObject, function(err){
            if(err){
                console.log("Error is" + err);
            }
            else{
                res.send("Room Created Successfully");
            }
        })

    },
    setRoomTemp(roomObject,temp,res){
        RoomCollection.find({roomID:roomObject.roomID},function(err,docs){

            if(err){
                console.log("Cannot perform event")
            }
            else{
                if(docs && docs.length>0){
                    res.send(docs[0]);
                }
            }
        })
    },

    getRoomDetails(roomid,res){
        RoomCollection.find({roomMac:roomid},function(err,docs){
            if(err){
                console.log("Error finding room", err);
            }
            else{
                if(docs && docs.length>0){
                    const DeviceOperations = require('./deviceOperations');
//                    res.send(docs[0]);
                    DeviceOperations.getDevices(roomid,docs[0],res);
                }
                else{
                    console.log("No such room exist");
                }
            }
        })
    },

    deleteRoom(roomid,res){
        RoomCollection.find({roomMac:roomid}).remove((err)=>{
            if(err){
                console.log("COuld not delete ")
            }
        })
    }


}

module.exports = RoomOperations