function coeToRunOnLoad(){
	console.log("test.js running");
	document.getElementsByTagName("body")[0].innerHTML+=
	("<div class=\"lightred textBox\">"+
				"Test text box 2"+
			"</div>");
	callPokemonApi();
}
function callPokemonApi(){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
	request.send();
	request.onload = ()=>{
		console.log(JSON.parse(request.response));
		document.getElementsByTagName("body")[0].innerHTML+=
		("<div class=\"lightred textBox\">"+
					"Test text box 3, pokemon name is "+
				JSON.parse(request.response).name);
	}
	
}
