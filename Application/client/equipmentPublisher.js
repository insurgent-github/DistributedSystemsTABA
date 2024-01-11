/*
Title: equipmentPublisher.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// equipmentPublisher.js

class EquipmentPublisher 
{
  constructor(mqttClient) 
  {
    this.client = mqttClient.client;
    this.publishEquipment();
  }

  publishEquipment() 
  {
    setInterval(() => 
    {
      const equipmentStatus = Math.random() > 0.5 ? 'ON' : 'OFF';
      const equipmentLocation = { latitude: Math.random() * 90, longitude: Math.random() * 180 };
      this.client.publish('smart-agriculture/equipment', JSON.stringify({ equipmentStatus, equipmentLocation }));
    }, 500);
  }
}

module.exports = EquipmentPublisher;
