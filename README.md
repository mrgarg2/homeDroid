# homeDroid
To service request between Android application and NodeMCU for home automation using nodeJS

This project uses TCP/IP connection to communicate between nodeMCU and the node server.

While using HTTP connection to communicate between node Server and the Android Application

So, node Server acts as a link between Android applicatiion and the nodeMCU hardware.

It also stores data sent by the sensors to the android application along with the time Stamp inside mongoDB to allow analysis on data.



### Initialisation

> To initialise make sure you have node environment installed on your machine.

> Then clone the repository and Type the command "npm init" on your node shell

> Wait for all the dependencies are installed..

> Run the server using "node app.js"

### Database

THis application uses mongoDB as Database, so it must be present on the machine if you require to use the Database services.

Database path is recommended to be set in the same folder as DBpath.

Here, mongoose module is used to access the DB.

### Public 

THis folder simple consists of the file to be send to the cllient Side.

Some test pages are present but mainly it is used to show the Room temp. and other details sent from the NodeMCU


