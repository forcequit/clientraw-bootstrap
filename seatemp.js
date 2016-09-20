<!-- Data courtesy of Marine Institue Ireland spiddal.marine.ie -->

function loadsea() {

var xmlhttp = new XMLHttpRequest();
var url = "http://erddap.marine.ie/erddap/tabledap/IWBNetwork.json?longitude,latitude,time,station_id,AtmosphericPressure,AirTemperature,DewPoint,WindSpeed,Gust,WindDirection,SeaTemperature,WavePeriod,WaveHeight,RelativeHumidity&station_id=%22M3%22&orderByMax(%22time%22)";

xmlhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
	var arr = JSON.parse(response);
	var a = [];
	a = arr.table.rows[0];
	var seatemp =a[10];
	document.getElementById("seatemp").innerHTML = seatemp +  '&#x2103';

}

}
