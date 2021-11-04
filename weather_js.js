$(document).ready(function(){
    // get location
    navigator.geolocation.getCurrentPosition(success, error);

    function success (pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather (lat, long);
    }
    function error (){
        console.log("error");
    }
   function weather () {
       var url = 'https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}';
       $.getJSON (URL, function(){
           console.log(data);
           updateDOM(data)
       });
   }

   weather();
   function updateDOM (data) {
       var city = data.name;
       var temp = Math.round(data.main.temp);
       var desc = data.weather[0].description;
       var icon = data.weather[0].icon;

       $("#city").html(city);
       $("#temp").html(temp);
       $("#desc").html(desc);
       $("#icon").attr("src", icon);

   }
});