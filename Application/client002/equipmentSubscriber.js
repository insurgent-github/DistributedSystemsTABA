/*
Title: equipmentSubscriber.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// equipmentSubscriber.js

//We are importing the 'mqtt' library for MQTT communications.
const mqtt = require ('mqtt');

class EquipmentSubscriber 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start subscribing to the Equipment values.
    this.subscribeToEquipment();
  }

  //Here is our method to subscribe the Equipment values.
  //It has two constants since we want to subscribe to the sprinkler and the harverster values.
  subscribeToEquipment()
  {
    //We are specifying the MQTT topics for the Equipment Status data.
    const sprinklerTopic = 'smart-agriculture/equipmentStatus/sprinkler';
    const harvesterTopic = 'smart-agriculture/equipmentStatus/harvester';

    //We are subscribing to the two MQTT topics.
    this.client.on ('connect', () =>
    {
      this.client.subscribe (sprinklerTopic);
      this.client.subscribe (harvesterTopic);
      //And we are logging the subscription details.
      console.log ('Subscribed to equipment topics.');
    });

    //We are handling incoming messages on the subscribed topic.
    this.client.on ('message', (topic, message) =>
    {
      console.log (`Received Equipment Data for ${topic}: `, message.toString());
      const data = JSON.parse (message.toString());
      console.log (`Parsed Equipment Data for ${topic}: `, data);
    });
  }
}

//Finally, we are exporting the class for use in other modules.
module.exports = EquipmentSubscriber;
