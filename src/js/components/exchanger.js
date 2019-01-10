let resultList = function(result, cryptoName, currencySign) {
  $('.' + cryptoName.toLowerCase() + '-list__hour').html(result.changes.price.hour + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__day').html(result.changes.price.day + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__week').html(result.changes.price.week + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__month').html(result.changes.price.month + currencySign);
};

let currencyСhange = function(cryptocurrency, currency) {
  $.ajax({
    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + cryptocurrency + currency,
    success: function(result) {
      resultList(result,cryptocurrency,'$');
    },
    error: function(data) {
    }
  });
};


$('.js-select').change(function() {
  if($(this).val() === 'usd') {
    currencyСhange('ETH','USD');
    /* // request for ETH
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
        $('.litecoin-list__hour').html(result.changes.price.hour + '$');
        $('.litecoin-list__day').html(result.changes.price.day + '$');
        $('.litecoin-list__week').html(result.changes.price.week + '$');
        $('.litecoin-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    });
    // request for BTC
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
      success: function(result) {
        $('.bitcoin-list__hour').html(result.changes.price.hour + '$');
        $('.bitcoin-list__day').html(result.changes.price.day + '$');
        $('.bitcoin-list__week').html(result.changes.price.week + '$');
        $('.bitcoin-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    }); */
  }else if($(this).val() === 'eur') {
    
  }else if($(this).val() === 'rub') {
    
  }else if($(this).val() === 'gbp') {
    
  }
});



/* $('.ethereum-block__check').click(function() {
  if( $(this).prop('checked') === true ) {
    if( $('.js-select').val() === 'usd' ) {
      $.ajax({
        url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD',
        success: function(result) {
          $('.ethereum-list__hour').html(result.changes.percent.hour + '%');
          $('.ethereum-list__day').html(result.changes.percent.day + '%');
          $('.ethereum-list__week').html(result.changes.percent.week + '%');
          $('.ethereum-list__month').html(result.changes.percent.month + '%');
        },
        error: function(data) {
        }
      });
    }
  }else{
      
  }
}); */
