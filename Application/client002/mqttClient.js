/*
Title: mqttClient.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

//We are importing the 'mqtt' library for MQTT communications.
const mqtt = require ('mqtt');
//We are initializing a timeout for reconnection. 
let reconnectTimeout = 1000;


class MqttClient 
{
  //We are creating our constructor for initializing an instance of MqttClient.
  constructor() 
  {
    //Initialize as offline by default.
    this.online = false;
    //We are establishing a connection to our HiveMQ MQTT broker.
    this.client = mqtt.connect ('mqtt://broker.hivemq.com');
    //And we are telling the constructor that we need the function setupListeners.
    this.setupListeners();
  }

  //This is our setupListeners function for the constructor.
  setupListeners() 
  {
    //We are logging a message when our client successfully connects to the broker.
    this.client.on ('connect', () => 
    {
      console.log ('Connected to MQTT broker 2');
      //We are setting the flag to ONLINE when we connect.
      this.online = true;
    });
    //In the same way, when the client is offline we are handling the error with a message.
    //And we are setting an exponential timeout to avoid overwhelming the server when reconnecting.
    this.client.on ('offline', () => 
    {
      console.log ('Client is offline. Reconnecting...');
      //We are setting the flag to go OFFLINE when we can't connect.
      this.online = false;
      //And we are setting and scheduling a reconnection after the specified timeout. 
      //That will double at each attempt. 
      setTimeout(() =>
      {
        this.client.reconnect();
      },  reconnectTimeout);
          reconnectTimeout *= 2;
    });
  }

    //This is our function to publish a message to a specific MQTT topic.
    publish (topic, message)
    {
      //We are checking if the client is online before publishing it.
      if (this.online)
      {
        //And we are telling the system to only publish if the client is online.
        this.client.publish (topic, message);
      }
      else
      {
        //Otherwise we are going to tell the user that the client is offline.
        console.log ('Client is offline, the message will not be published');
      }
    }
}

//We are creating an instance of the MqttClient class
const mqttClient = new MqttClient();

//We are exporting the MqttClient class for external use (like in our client002.js!)
module.exports = MqttClient;