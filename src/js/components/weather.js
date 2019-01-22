function geoFindMe() {
  /* if (!navigator.geolocation) {
    output.innerHTML = '<p>Geolocation is not supported by your browser</p>';
    return;
  } */
  
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    $.ajax({
      url: 'https://fcc-weather-api.glitch.me/api/current?lat=' + latitude + '&lon=' + longitude,
      success: function(result) {
        console.log(result);
        
        let locationName = result.name +','+ result.sys.country;
        let temperature = result.main.temp;
        let temperatureDef = '<div><span>' + temperature + '</span>°<a href="#" class="js-toggle-temp">C</a></div>';
        let weatherImgLink = '<img src="' + result.weather[0].icon + '">';
        
        $('.weather__location').html(locationName);
        $('.weather__temperature').html(temperatureDef);
        $('.weather__status').html(result.weather[0].description);
        $('.weather__icon').html(weatherImgLink);
        $('.js-toggle-temp').click(function() {
          $(this).toggleClass('is-F');

          if($(this).hasClass('is-F')) {

            $('.js-toggle-temp').html('F');
            let temperatureFar = temperature * (9/5) + 32;
            $('.weather__temperature span').html(temperatureFar);

          }else{

            $('.js-toggle-temp').html('C');
            $('.weather__temperature span').html(temperature);

          }
        });

      },
      error: function(data) {
      }
    });
  };
  
  function error() {
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
}
geoFindMe();
