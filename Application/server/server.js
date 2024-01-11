/*
Title: server.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// server.js

const MqttServer = require('./mqttServer');
const SoilTemperatureSubscriber = require('./soilTemperatureSubscriber');
const FarmFieldSubscriber = require('./farmFieldSubscriber');
const EquipmentSubscriber = require('./equipmentSubscriber');
const DisconnectedHandler = require('./disconnectedHandler');

const mqttServer = new MqttServer();
const soilTemperatureSubscriber = new SoilTemperatureSubscriber(mqttServer);
const farmFieldSubscriber = new FarmFieldSubscriber(mqttServer);
const equipmentSubscriber = new EquipmentSubscriber(mqttServer);
const disconnectedHandler = new DisconnectedHandler(mqttServer);
