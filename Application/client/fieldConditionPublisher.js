/*
Title: fieldConditionsPublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// fieldConditionsPublisher.js

class FieldConditionsPublisher 
{
  constructor(mqttClient) 
  {
    this.client = mqttClient.client;
    this.publishFieldConditions();
  }

  publishFieldConditions() 
  {
    setInterval(() => 
    {
      const soilMoisture = Math.floor(Math.random() * 100);
      const soilTemperature = Math.floor(Math.random() * 50);
      this.client.publish('smart-agriculture/field/conditions', JSON.stringify({ soilMoisture, soilTemperature }));
    }, 1000);
  }
}

module.exports = FieldConditionsPublisher;
