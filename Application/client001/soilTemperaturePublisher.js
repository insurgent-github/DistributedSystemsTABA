/*
Title: soilTemperaturePublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// soilTemperaturePublisher.js

class SoilTemperaturePublisher 
{
  //We are creating the constructor to initialize the instance with an mqttClient.
  constructor (mqttClient) 
  {
    //We are extracting the mqttClient from the provided instance.
    this.client = mqttClient.client;
    //And we are invoking the method to start publishing Soil Temperature values.
    this.publishSoilTemperature();
  }

  //Here is our method to publish the soil temperature values at regular intervals.
  publishSoilTemperature() 
  {
    //We are setting an interval to repeteadly execute the function.
    setInterval(() => 
    {
      //We are generating a random value.
      const soilTemperatureValue = Math.floor(Math.random() * 50);
      //We are specifying the MQTT topic that we need to publish the value to.
      const topic = 'smart-agriculture/fieldCondition/soilTemperature';
      //We are logging the publishing details.
      console.log ('Publishing to topic: ', topic);
      console.log ('Data ', { soilTemperatureValue });
      //And publishing the value to the MQTT topic as a JSON string.
      this.client.publish(topic, JSON.stringify({ soilTemperatureValue}));
    }, 500);
  }
}

//Finally, we are exporting the class for use in other modules.
module.exports = SoilTemperaturePublisher;