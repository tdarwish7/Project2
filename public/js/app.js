window.onload = function () {
  //instatiate a new object of XMLRequest
  var http = new XMLHttpRequest();
  //store the url of the poke api into a variable
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokedex/2/';


  http.onreadystatechange = function() {
    if( http.readyState == 4 && http.status == 200 ) {
       var pokeData = JSON.parse( http.response );
       console.log(pokeData);
       var pokeObj = pokeData["pokemon_entries"];
       var pokemonNames = new Array();

       for(var i = 0; i < pokeObj.length; i+=1) {

         pokemon = pokeObj[i]["pokemon_species"]["name"];
         document.getElementById('pokemon1').innerHTML += pokemon + "<hr>";
       };
    };
  };

  //call the method open to request the data and pass the type of http request, the address, and the boolean value for asynchrounous requests.
  http.open('GET', pokemonUrl, true);
  //send the data back
  http.send();

  console.log(http);
};
