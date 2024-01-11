/*
Title: equipmentSubscriber.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// equipmentSubscriber.js

class EquipmentSubscriber 
{
  constructor(mqttServer) 
  {
    this.client = mqttServer.client;
    this.subscribeToEquipment();
  }

  subscribeToEquipment() 
  {
    this.client.subscribe('smart-agriculture/equipment/#');

    this.client.on('message', (topic, message) => 
    {
      console.log('Equipment Data:', message.toString());
    });
  }
}

module.exports = EquipmentSubscriber;
