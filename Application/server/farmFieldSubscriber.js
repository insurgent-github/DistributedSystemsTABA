/*
Title: farmFieldSubscriber.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/


// farmFieldSubscriber.js

class FarmFieldSubscriber 
{
  constructor(mqttServer) 
  {
    this.client = mqttServer.client;
    this.subscribeToFarmField();
  }

  subscribeToFarmField() 
  {
    this.client.subscribe('smart-agriculture/field/#');

    this.client.on('message', (topic, message) => 
    {
      console.log('Farm Field Data:', message.toString());
    });
  }
}

module.exports = FarmFieldSubscriber;
