# homebridge-ninjablock-humidity
[NinjaBlock](https://developers.ninja/legacy/index.html) plugin for [HomeBridge](https://github.com/nfarina/homebridge)

# Installation


1. Install homebridge using: npm install -g homebridge
2. Install this plugin using: npm install -g homebridge-ninjablock-humidity
3. Update your configuration file. See sample config.json snippet below. 

# Configuration

Configuration sample:

 ```
 {
"accessory": "NinjaBlock-Humidity",
"humidity_url" : "<YOUR URL GOES HERE>",
"service" : "Humidity Sensor",
"name" : "NinjaBlock Humidity Sensor"
 }
```

Fields: 
* "accessory": Must always be "NinjaBlock-Humidity" (required)
* "humidity_url": Get the API Endpoint URL from the [NinjaBlocks Dashboard](https://a.ninja.is/home), add "?user_access_token=" and add your [API Access Token](https://a.ninja.is/hacking).
*   Example: https://a.ninja.is/rest/v0/device/4412BB000300_0101_0_30?user_access_token=abc123"
* "service": Must always be "Humidity Sensor" (required)
* "name": Can be anything but is required
