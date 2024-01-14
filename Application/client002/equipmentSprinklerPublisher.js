/*
Title: equipmentSprinklerPublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

//equipmentSprinklerPublisher.js

class EquipmentSprinklerPublisher 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start publishing sprinkler values.
    this.publishEquipmentSprinkler();
  }

  //Here is our method to publish the harvester values at regular intervals.
  publishEquipmentSprinkler() 
    {
      //We are setting an interval to repeteadly execute the function.
      setInterval(() => 
      {
        //We are generating a random value between ON and OFF.
        //And random values for the latitude and longitude.
        const equipmentSprinklerStatus = Math.random() > 0.5 ? 'ON' : 'OFF';
        const equipmentSprinklerLocation = 
        { 
          latitude: Math.random() * 90, 
          longitude: Math.random() * 180 
        };
        //We are specifying the MQTT topic that we need to publish the value to.
        const topic = `smart-agriculture/equipmentStatus/sprinkler`;
        //We are logging the publishing details.
        console.log ('Publishing to topic: ', topic)
        console.log ('Data: ', {equipmentSprinklerStatus, equipmentSprinklerLocation});
        //And publishing the value to the MQTT topic as a JSON string.
        this.client.publish (topic, JSON.stringify({ equipmentStatus: equipmentSprinklerStatus, equipmentStatus: equipmentSprinklerLocation }));
      }, 500);
    }
}

//Finally, we are exporting the class for use in other modules.
module.exports = EquipmentSprinklerPublisher;