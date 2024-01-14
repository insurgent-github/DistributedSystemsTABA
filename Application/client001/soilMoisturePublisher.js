/*
Title: soilMoisturePublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// soilMoisturePublisher.js

class SoilMoisturePublisher 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start publishing Soil Moisture values.
    this.publishSoilMoisture();
  }

  //Here is our method to publish the soil moisture values at regular intervals.
  publishSoilMoisture() 
  {
    //We are setting an interval to repeteadly execute the function.
    setInterval(() => 
    {
      //We are generating a random value.
      const soilMoistureValue = Math.floor(Math.random() * 100);
      //We are specifying the MQTT topic that we need to publish the value to.
      const topic = 'smart-agriculture/fieldCondition/soilMoisture';
      //We are logging the publishing details.
      console.log ('Publishing to topic: ', topic);
      console.log ('Data ', { soilMoistureValue });
      //And publishing the value to the MQTT topic as a JSON string.
      this.client.publish(topic, JSON.stringify({ soilMoistureValue }));
    }, 500);
  }
}

//Finally, we are exporting the class for use in other modules.
module.exports = SoilMoisturePublisher;