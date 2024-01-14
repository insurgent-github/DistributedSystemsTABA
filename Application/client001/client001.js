/*
Title: client001.js
Author: Miguel Angel Vinas
Date: 14th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// client001.js

//This file sets up instances of classes related to MQTT communication and Field status.

//We are importing the MqttClient class from the mqttClient module.
//And we are importing the different classes needed. 
const MqttClient = require ('./mqttClient');
const SoilMoisturePublisher = require ('./soilMoisturePublisher');
const SoilTemperaturePublisher = require ('./soilTemperaturePublisher');
const SoilTemperatureSubscriber = require ('./soilTemperatureSubscriber');

//We are creating an instance of the MqttClient class.
//And we are creating instances of the other classes needed.
const mqttClient = new MqttClient();
const soilMoisturePublisher = new SoilMoisturePublisher (mqttClient);
const soilTemperaturePublisher = new SoilTemperaturePublisher (mqttClient);
const soilTemperatureSubscriber =new SoilTemperatureSubscriber (mqttClient);