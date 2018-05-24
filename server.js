const net = require('net');
//const NodeClient = require('./nodeClient')
//const AndroidClient = require('./androidClient')
//const Client = require('./client');

const Server = {

    clientList:[],

    server: net.createServer((socket)=>{
        
        var client = new Client(socket);
        Server.clientList.push(client);
        console.log(`Socket ${socket.remoteAddress}:${socket.remotePort} connected`);

        socket.on('data',function(data){
//            var dataObj = JSON.parse(data);
            // if(dataObj.MAC){
 //               if()
            // }
/*          var dataObj = JSON.parse(data);
            if(dataObj.MAC){
                if(findByMac()){
                    JSON.stringify(dataObj);
                }
                else{
                    var nClient = new nodeClient(this);
                    nclientList.push(nClient);
                }

            }
            else{
                nClientList
            }





*/
            Server.broadcast(socket,data);

            console.log("Data is" + data);
        })
    }),

    listen(){
        this.server.listen(4000,'192.168.43.28');
        console.log("Listening at 4000...");
    },

    broadcast(socket,data){
        this.clientList.filter((Client) =>{
            if(Client.socket==socket)
                return;
            Client.write(data);
        })
    }


}


module.exports = Server;