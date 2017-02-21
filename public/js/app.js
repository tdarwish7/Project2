window.onload = function () {

  //instantiate a new XML object
  var http = new XMLHttpRequest();
  //store the url as a string in a variable
  var url = 'http://pokeapi.co/api/v2/pokemon-habitat/1/';

  //use method .open() to request the data and pass it the type of http request, the destination, and a boolean value for asynchronous runtime.
  http.open('GET', url, true);
  http.send();

  http.onreadystatechange = function () {
    if( http.readyState == 4 && http.status == 200 ) {

      var data = JSON.parse( http.response );
      var pokemon = data["pokemon_species"];

      for(var i = 0; i < pokemon.length; i +=1) {
        console.log(pokemon[i]["name"]);
      }
    }
  };


  // console.log("This is an AJAX request ", http);


  /*
    READY STATES

    0 - request is not initialized
    1 - request has been set up
    2 - request has been sent
    3 - request is in progress
    4 - request is complete

  */

};
