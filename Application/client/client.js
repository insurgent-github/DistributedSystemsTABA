/*
Title: client.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/


// client.js

const MqttClient = require('./mqttClient');
const FieldConditionsPublisher = require('./fieldConditionsPublisher');
const EquipmentPublisher = require('./equipmentPublisher');

const mqttClient = new MqttClient();
const fieldConditionsPublisher = new FieldConditionsPublisher(mqttClient);
const equipmentPublisher = new EquipmentPublisher(mqttClient);
