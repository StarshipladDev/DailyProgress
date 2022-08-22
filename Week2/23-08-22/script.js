function populatesvg(){
	
	var svgDocument = document.getElementById("form");
	createsquare(0,0,150,250,svgDocument) //OverallBorder
	createsquare(0,0,130,20,svgDocument) //Title
	createsquare(130,0,20,20,svgDocument) //Icon
	createsquare(0,20,150,100,svgDocument) //Image
	createsquare(0,170,150,40,svgDocument) //Rule1
	createsquare(0,170,150,40,svgDocument) //Rule2
	createsquare(0,170,150,40,svgDocument) //Rule3
	callPokemonApi();
}
function createsquare(x,y,width,height,svgDocument){
	var cardIcon = document.createElementNS("http://www.w3.org/2000/svg","rect");
	cardIcon.setAttribute('class','cardBorder');
	cardIcon.setAttribute('x',x);
	cardIcon.setAttribute('y',y);
	cardIcon.setAttribute('width',width);
	cardIcon.setAttribute('height',height);
	svgDocument.appendChild(cardIcon);
}
function callPokemonApi(){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://www.starshiplad.com/API/')
	request.send();
	request.onload = ()=>{
		console.log(JSON.parse(request.response));
		document.getElementsByTagName("body")[0].innerHTML+=
		("<div class=\"lightred textBox\">"+
					"Test text box 3, Card name is "+
				JSON.parse(request.response).Name);
	}
	
}