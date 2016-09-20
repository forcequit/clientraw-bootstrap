function loadweather() {

var xmlhttp = new XMLHttpRequest();
var url = "../clientraw.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        parseclientraw(this.responseText);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function parseclientraw(arr) {
	var x = arr.split(/(\s+)/);
	console.log("Clientraw.txt: " + x);
 	document.getElementById('date').innerHTML = x[70] + "/" + x[72] + " " + x[58] +":" + x[60];

	document.getElementById('temp').innerHTML = x[8]  +  '&#x2103';
	document.getElementById('textw').innerHTML = textw(x[96]);

	document.getElementById('wind').innerHTML = x[2]  +  'Knots';
	document.getElementById('gust').innerHTML = x[4]  +  'Knots';

	document.getElementById('dir').innerHTML = degree(x[6]);

	document.getElementById('cloud').innerHTML = x[146]   +  'feet';


	document.getElementById('fcast').innerHTML = x[98].split('_').join(' ');

	document.getElementById('baro').innerHTML = x[12] +'Hpa';
	document.getElementById('trend').innerHTML = barotrend(x[100]);
	
	document.getElementById('tmax').innerHTML = x[92] +  '&#x2103';
	document.getElementById('tmin').innerHTML = x[94] +  '&#x2103';

	if (Number(x[14]) == 0) {x[14]='0.00'}
	document.getElementById('rain').innerHTML = x[14]   + 'mm';

	document.getElementById('rain-p').innerHTML = x[38]   + 'mm';

	document.getElementById('rain-m').innerHTML = x[16] + 'mm';
	document.getElementById('rain-y').innerHTML = x[18] + 'mm';
	
}

function degree(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["North", "NNE", "NE", "ENE", "East", "ESE", "SE", "SSE", "South", "SSW", "SW", "WSW", "West", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

function barotrend(barx) {
var trend;
if(barx <= -.06){ trend = "Falling rapidly"; };
if(barx > -.06 && barx <= -.03){ trend = "Falling Steady"; };
if(barx > -.029 && barx < .029){ trend = "Steady"; };
if(barx >= .03 && barx < .06){ trend = "Rising Steady"; };
if(barx >=.06){ trend = "Rapidly Rising"; };
return trend;
}


function textw(num) {
    var arr = ["Sunny","Clear","Cloudy","Fine","Cloudy","Dry","Fog","Haze","Heavy rain","Fine","Mist","Fog","Heavy rain","Overcast","Rain","Showers","Snow","Thunder","Overcast","Cloudy","Rain ","Light rain","Showers","Sleet","Sleet","Snow","Snow","Snow","Sunny","Thunder showers","Thunder showers","Thunder storms","Very Windy","Windy","Stopped raining"];
    return arr[num];
}


}
