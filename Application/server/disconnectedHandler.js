/*
Title: disconnectedHandler.js
Author: Miguel Angel Vinas
Date: 10th January, 2024
Purpose: Distribution's Systems TABA for National College Of Ireland
*/

// disconnectedHandler.js

class DisconnectedHandler 
{
  constructor(mqttServer) 
  {
    this.client = mqttServer.client;
    this.handleDisconnected();
  }

  handleDisconnected() 
  {
    this.client.on('offline', () => 
    {
      console.log('Client is offline. Reconnecting...');
      this.client.reconnect();
    });
  }
}

module.exports = DisconnectedHandler;
