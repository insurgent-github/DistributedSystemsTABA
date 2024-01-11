/*
Title: mqttClient.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// mqttClient.js

const mqtt = require('mqtt');

class MqttClient 
{
  constructor() 
  {
    this.client = mqtt.connect('mqtt://mqtt.eclipse.org');
    this.setupListeners();
  }

  setupListeners() 
  {
    this.client.on('connect', () => 
    {
      console.log('Connected to MQTT broker');
    });

    this.client.on('offline', () => {
      console.log('Client is offline. Reconnecting...');
      this.client.reconnect();
    });
  }
}

module.exports = MqttClient;
