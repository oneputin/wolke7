var cloudFB; // 
var fbConfig = {
    "wolke7": {  
      "apiKey":        "AIzaSyC32ZX3rKvRFJTGZ7vVxxQX-WJCDPC01Dk",
      "authDomain":    "wolke7-fd941.firebaseapp.com",
      "databaseURL":   "https://wolke7-fd941.firebaseio.com",
      "storageBucket": "wolke7-fd941.appspot.com"
    },
    "wolke9" :{
    }
};

var fbInit = function(name, oldname) {
	if (!fbConfig) return;
	var keys = Object.keys(fbConfig);
	if(!name) name = keys[0]; 

	var config = fbConfig[name]; //console.log("initFB:config",config);
	if (!config) return; 
	// var fba = firebase.initializeApp(config, name); 
	cloudFB = firebase.initializeApp(config); console.log("cloudFB created:" + cloudFB.name, cloudFB.options);
	return  
};

