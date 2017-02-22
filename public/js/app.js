window.onload = function () {

//declared a function with one parameter called url
  function get(url) {
    //as soon as the function runs, return a promist object, we leverage reject and resolve to reject
    //and accept data that is or isnt successfully retrieved.
    return new Promise(function(resolve,reject) {
      //instantiate the AJAX object
      var xhttp = new XMLHttpRequest();
      //request  data with the three parameters passed into the open method.
      xhttp.open('GET', url, true);
      //upon loading the data we specify a conditional to make sure the request was a success,
      //if it is we turn the response in to JSON
      //if not we grab the text status which will give us an idea to what the error was and why
      //the data was not successfully retrieved.
      xhttp.onload = function (){
        if( xhttp.status == 200 ) {
          resolve( JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function () {
        reject(xhttp.statusText);
      };
      //send the Data back
      xhttp.send();
    });
  }

//now here we call the get function and store it into a variable called promise.
  var promise = get('http://pokeapi.co/api/v2/pokemon/');
  //then we call the method 'then' so we can do things with this data. so we pass it a function with
//  a parameter to retrieve the data being passed. and logging out the data to the console.
    promise.then(function(pokeData) {
      console.log(pokeData);
      return get('http://pokeapi.co/api/v2/pokedex/14/');
      //we can also chain multiple AJAX requests or callback functions with promises by asking
      //the previous then method to return the invocation of another request. and we also must do another .then
      //method to handle the data that is being sent back for the second request.
    }).then(function(pokeData2) {
      console.log(pokeData2);
      //the method catch handles all rejected cases, if any, of object Promise
    }).catch(function(error) {
      console.log(error);
    });

    var a;
    //goes out to the internet and looks for a value

    if ( a ) {
      console.log('something is there');
    }

}
