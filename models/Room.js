class Room{
    constructor(Mac,name,ip){
        this.roomMac = Mac
        this.name = name;
        this.ip = ip;
        this.DeviceList = [1,1,1];
    }
}

module.exports = Room;