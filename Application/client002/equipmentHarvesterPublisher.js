/*
Title: equipmentHarvesterPublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

//equipmentHarvesterPublisher.js

class EquipmentHarvesterPublisher 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start publishing harvester values.
    this.publishEquipmentHarvester();
  }

  //Here is our method to publish the harvester values at regular intervals.
  publishEquipmentHarvester() 
    {
      //We are setting an interval to repeteadly execute the function.
      setInterval(() => 
      {
        //We are generating a random value between ON and OFF.
        //And random values for the latitude and longitude.
        const equipmentHarvesterStatus = Math.random() > 0.5 ? 'ON' : 'OFF';
        const equipmentHarvesterLocation = 
        { 
          latitude: Math.random() * 90, 
          longitude: Math.random() * 180 
        };
        //We are specifying the MQTT topic that we need to publish the value to.
        const topic = `smart-agriculture/equipmentStatus/harvester`;
        //We are logging the publishing details.
        console.log ('Publishing to topic: ', topic)
        console.log ('Data: ', {equipmentHarvesterStatus, equipmentHarvesterLocation});
        //And publishing the value to the MQTT topic as a JSON string.
        this.client.publish (topic, JSON.stringify({ equipmentStatus: equipmentHarvesterStatus, equipmentLocation: equipmentHarvesterLocation }));
      }, 500);
    }
}

//Finally, we are exporting the class for use in other modules.
module.exports = EquipmentHarvesterPublisher;