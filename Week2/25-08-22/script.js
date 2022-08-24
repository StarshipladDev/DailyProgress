async function populatesvg(){
	
	var array= await callPokemonApi();
	console.log('array is : \n' ,array);
	var svgDocument = document.getElementById("formSvg");
	createsquare(0,0,150,250,svgDocument) //OverallBorder
	createsquare(0,0,130,20,svgDocument) //Title
	createsquare(130,0,20,20,svgDocument) //Icon
	createsquare(0,20,150,100,svgDocument) //Image
	createsquare(0,170,150,40,svgDocument) //Rule1
	createsquare(0,170,150,40,svgDocument) //Rule2
	createsquare(0,170,150,40,svgDocument) //Rule3
	var imageId = array['id'];
	drawImage(imageId);
	var name = array['name'];
	drawName(1,1,130,0,name,svgDocument);
	cleanseElements();
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
	 return new Promise((resolve) => {
		var idElement = document.createElement('div');
		idElement.setAttribute('id','id',);
		document.getElementById('mainForm').appendChild(idElement);
		var nameElement = document.createElement('div');
		nameElement.setAttribute('id','name',);
		document.getElementById('mainForm').appendChild(nameElement);
		var typeElement = document.createElement('div');
		typeElement.setAttribute('id','type',);
		document.getElementById('mainForm').appendChild(typeElement);
		/*End create hidden elements */
		var request = new XMLHttpRequest();
		request.open('GET', 'https://www.starshiplad.com/API/')
		request.send();
		request.onload = ()=>{
			console.log(JSON.parse(request.response));
			document.getElementsByTagName("body")[0].innerHTML+=
			("<div class=\"lightred textBox\">"+
						"Test text box 3, Card name is "+
					JSON.parse(request.response).Name);
			var returnArray= [];
			returnArray['id']
			returnArray['id']= JSON.parse(request.response).Id
			returnArray['type']= JSON.parse(request.response).CardType
			returnArray['name']= JSON.parse(request.response).Name
			resolve(returnArray);
		}
	});
	/* Create hidden elements */
	
	
}
function cleanseElements(){
	document.getElementById('mainForm').removeChild(document.getElementById('id'));
	document.getElementById('mainForm').removeChild(document.getElementById('type'));
	document.getElementById('mainForm').removeChild(document.getElementById('name'));
}
function drawImage(id){
	document.getElementById('formImage').src='CardImages/'+id+'.png';
}
/*<text x="0" y="15" fill="red">I love SVG!</text>*/
function drawName(x,y,width,height,textinput,svgDocument){
	var textElement = document.createElementNS("http://www.w3.org/2000/svg","text");
	textElement.setAttribute('class','cardBorder');
	textElement.setAttribute('x',x);
	textElement.setAttribute('y',y+15);
	textElement.setAttribute('width',width);
	textElement.setAttribute('height',height);
	textElement.innerHTML=textinput;
	svgDocument.appendChild(textElement);
}