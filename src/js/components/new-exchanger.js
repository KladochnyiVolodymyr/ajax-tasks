
let currencyСhange = function(cryptocurrency, currency) {
  $.ajax({
    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + cryptocurrency + currency,
    success: function(result) {
      console.log(result);
    },
    error: function(data) {
    }
  });
};
currencyСhange('ETH','USD');
