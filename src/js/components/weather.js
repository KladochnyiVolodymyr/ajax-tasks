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
        let locationName = result.name +','+ result.sys.country;
        $('.weather__location').html(locationName);
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
