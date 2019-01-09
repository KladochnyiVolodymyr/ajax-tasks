$('.js-select').change(function() {
  if($(this).val() === 'usd') {
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
    });
  }else if($(this).val() === 'eur') {
    // request for ETH
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHEUR',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCEUR',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEUR',
      success: function(result) {
        $('.bitcoin-list__hour').html(result.changes.price.hour + '$');
        $('.bitcoin-list__day').html(result.changes.price.day + '$');
        $('.bitcoin-list__week').html(result.changes.price.week + '$');
        $('.bitcoin-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    }); 
  }else if($(this).val() === 'rub') {
    // request for ETH
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB',
      success: function(result) {
        $('.bitcoin-list__hour').html(result.changes.price.hour + '$');
        $('.bitcoin-list__day').html(result.changes.price.day + '$');
        $('.bitcoin-list__week').html(result.changes.price.week + '$');
        $('.bitcoin-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    }); 
  }else if($(this).val() === 'gbp') {
    // request for ETH
    $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHGBP',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCGBP',
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
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP',
      success: function(result) {
        $('.bitcoin-list__hour').html(result.changes.price.hour + '$');
        $('.bitcoin-list__day').html(result.changes.price.day + '$');
        $('.bitcoin-list__week').html(result.changes.price.week + '$');
        $('.bitcoin-list__month').html(result.changes.price.month + '$');
      },
      error: function(data) {
      }
    }); 
  }
});



$('.ethereum-block__check').click(function() {
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
});
