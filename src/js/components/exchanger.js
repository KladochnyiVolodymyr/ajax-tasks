$('.js-select').change(function() {
  if($(this).val() === 'usd') {
    console.log('usd');
    // request for ETH
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD',
      success: function(result) {
        $('.ethereum-list__hour').html(result.changes.price.hour + '$');
        $('.ethereum-list__day').html(result.changes.price.day + '$');
        $('.ethereum-list__week').html(result.changes.price.week + '$');
        $('.ethereum-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    });
    // request for LTC
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD',
      success: function(result) {
        console.log(result);
      },
      error: function(data) {
      }
    });
    // request for BTC
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
      success: function(result) {
        console.log(result);
      },
      error: function(data) {
      }
    });
  }else if($(this).val() === 'eur') {
    console.log('eur');
  }else if($(this).val() === 'rub') {
    console.log('rub');
  }else if($(this).val() === 'gbp') {
    console.log('gbp');
  }
});
