var Service, Characteristic;
var superagent = require('superagent');
var jsonapify = require('superagent-jsonapify');
jsonapify(superagent)

module.exports = function(homebridge){
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-ninjablock-humidity", "NinjaBlock-Humidity", HttpAccessory);
}

function HttpAccessory(log, config) {
	this.log = log;
	this.humidity_url = config["humidity_url"];
	this.service = config["service"];
	this.name = config["name"];
}

HttpAccessory.prototype = {
  getHumidity: function(callback) {
    console.log("Humidity Sensor Triggered");
    superagent.get(this.humidity_url).then(function(response){
		const body = response.body;
		// console.log("body", body);
		const sensordata = body.data.last_data.DA;
		console.log("Humidity sensor data: ", sensordata);
		callback(null,sensordata);
	});
  },

  identify: function(callback) {
		this.log("Humidity Sensor: Identify requested!");
		callback();
	},

	getServices: function() {
		var informationService = new Service.AccessoryInformation();
		    informationService
      			.setCharacteristic(Characteristic.Manufacturer, "NinjaBlocks")
			.setCharacteristic(Characteristic.Model, "NinjaBlock")
			.setCharacteristic(Characteristic.SerialNumber, "0.1.1")
		if (this.service == "Humidity Sensor") {
      			humidityService = new Service.HumiditySensor("Relative Humidity");
			humidityService
			        .getCharacteristic(Characteristic.CurrentRelativeHumidity)
			        .on('get', this.getHumidity.bind(this));


	return [informationService, humidityService];
		}
	}
};
