/*
Title: soilTemperatureSubscriber.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/


// soilTemperatureSubscriber.js

class SoilTemperatureSubscriber 
{
  constructor(mqttServer) 
  {
    this.client = mqttServer.client;
    this.subscribeToSoilTemperature();
  }

  subscribeToSoilTemperature() 
  {
    this.client.subscribe('smart-agriculture/field/conditions/soil-temperature');

    this.client.on('message', (topic, message) => 
    {
      if (topic === 'smart-agriculture/field/conditions/soil-temperature') 
      {
        const data = JSON.parse(message.toString());
        console.log('Soil Temperature:', data.soilTemperature + '°C');
      }
    });
  }
}

module.exports = SoilTemperatureSubscriber;
