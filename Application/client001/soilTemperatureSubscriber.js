/*
Title: soilTemperatureSubscriber.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// soilTemperatureSubscriber.js

//We are importing the 'mqtt' library for MQTT communications.
const mqtt = require ('mqtt');

class SoilTemperatureSubscriber 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start subscribing to the Soil Temperature values.
    this.subscribeToSoilTemperature();
  }

  //Here is our method to subscribe the soil temperature values..
  subscribeToSoilTemperature() 
  {
    //We are specifying the MQTT topic for the temperature data.
    const soilTemperatureTopic = 'smart-agriculture/fieldCondition/soilTemperature';
    //We are subscribing to the specified MQTT topic.
    this.client.subscribe(soilTemperatureTopic);
    //And we are logging the subscription details.
    console.log ('Subscribed to Temperature topics.');

    //We are handling incoming messages on the subscribed topic.
    this.client.on ('message', (topic, message) => 
    {
      if (topic === soilTemperatureTopic) 
      {
        console.log ('Received Soil Temperature Data: ', message.toString());
        const data = JSON.parse (message.toString());
        console.log ('Parsed Soil Temperature Data:', data);
      }
    });
  }
}

//Finally, we are exporting the class for use in other modules.
module.exports = SoilTemperatureSubscriber;
