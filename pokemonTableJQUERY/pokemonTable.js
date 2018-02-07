//id  data.id
//name data.name
//type data.types[0].type.name
//img normal data.sprites.front_default
//img shiny data.sprites.front_shiny
var id = 549;
$( window ).on( "load", function() {
		getPokemon();
		//onclick actions
		$("#last").on("click", last);
		$("#search").click(search);
		$("#next").on("click", next);



});

function getPokemon() {
	$.get("https://www.pokeapi.co/api/v2/pokemon/" +  id + "/", function(data) {
		$("#id").html(data.id);
		$("#normalSprite").html("<img src=" + "'" + data.sprites.front_default + "'" + "></img>");
		$("#shinySprite").html("<img src=" + "'" + data.sprites.front_shiny + "'" + "></img>");
		$("#name").html(data.name);
		$("#type").html(data.types[0].type.name)
	});

}

function last() {
	console.log("last clicked");
	if (id > 1) --id;
	getPokemon();
}

function next() {
	console.log("next clicked");
	if (id < 802) id++;
	getPokemon();
}

function search() {
	console.log("search clicked");
	id = $("#inputSearch").val()
	getPokemon();
}

