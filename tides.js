function loadtides() {
	var oReq = new XMLHttpRequest();
	oReq.onload = function() {
		xml(this.responseText);
	};

	var url = "http://paid.feed43.com/vwtides.xml"
	
	<!-- Note if you have Cross Origin issues with your data feed contact author -->

	oReq.open("get", url, true);
	oReq.send();

function xml(xml) {

	var xmlDoc = ParseXML(xml);

    document.getElementById("tides").innerHTML = xmlDoc.getElementsByTagName('description')[1].childNodes[0].nodeValue;


}

function ParseXML(val)
{
    if (window.DOMParser)
      {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(val,"text/xml");
      }
    else // Internet Explorer
      {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); xmlDoc.loadXML(val);
      }
return xmlDoc ;
}
}
