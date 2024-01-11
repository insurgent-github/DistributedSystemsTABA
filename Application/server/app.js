/*
Title: app.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

//We are telling the program that we require the server file of MQTT. 
const mqtt = require('mqtt');
const path = require ('path');

// app.js
try
{

//We are constructing the absolute path to the mqttServer.js since it seems impossible to find it!
	const mqttServerPath = path.join(__dirname, 'mqttServer')

//Then we are importing the MqttServer class using the absolute path in the MattServer constant.
const MqttServer = require(mqttServerPath);
const SoilTemperatureSubscriber = require('./soilTemperatureSubscriber');
const FarmFieldSubscriber = require('./farmFieldSubscriber');
const EquipmentSubscriber = require('./equipmentSubscriber');
const DisconnectedHandler = require('./disconnectedHandler');
const MqttClient = require('../client/mqttClient');
const FieldConditionsPublisher = require('../client/fieldConditionPublisher');
const EquipmentPublisher = require('../client/equipmentPublisher');
}
catch (error)
{
	console.error ("Error importing modules", error.message);
	process.exit (1);
}
// SERVER
console.log('Attempting to create MqttServer instance');
const mqttServer = new MqttServer();
const soilTemperatureSubscriber = new SoilTemperatureSubscriber(mqttServer);
const farmFieldSubscriber = new FarmFieldSubscriber(mqttServer);
const equipmentSubscriber = new EquipmentSubscriber(mqttServer);
const disconnectedHandler = new DisconnectedHandler(mqttServer);

// CLIENT
const mqttClient = new MqttClient();
const fieldConditionsPublisher = new FieldConditionsPublisher(mqttClient);
const equipmentPublisher = new EquipmentPublisher(mqttClient);