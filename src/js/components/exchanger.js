let resultListPrice = function(result, cryptoName, currencySign) {
  $('.' + cryptoName.toLowerCase() + '-price').html(result.volume);
  $('.' + cryptoName.toLowerCase() + '-list__hour').html(result.changes.price.hour + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__day').html(result.changes.price.day + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__week').html(result.changes.price.week + currencySign);
  $('.' + cryptoName.toLowerCase() + '-list__month').html(result.changes.price.month + currencySign);

  $('.' + cryptoName.toLowerCase() + '-list__hour_percent').html(result.changes.percent.hour + '%');
  $('.' + cryptoName.toLowerCase() + '-list__day_percent').html(result.changes.percent.day + '%');
  $('.' + cryptoName.toLowerCase() + '-list__week_percent').html(result.changes.percent.week + '%');
  $('.' + cryptoName.toLowerCase() + '-list__month_percent').html(result.changes.percent.month + '%');

  $('.block__list span').each(function() {
    if( $( this ).text().slice(0, -1) < 0 ) {
      $(this).addClass('is-lower');
    }
  });

};

let currencyСhange = function(cryptocurrency, currency, sign) {
  $.ajax({
    url: `https://apiv2.bitcoinaverage.com/indices/global/ticker/${cryptocurrency + currency}`,
    success: function(result) {
      resultListPrice(result, cryptocurrency, sign);
    },
    error: function(data) {
    }
  });
};

$('.js-select').change(function() {
  if($(this).val() === 'usd') {
    currencyСhange('ETH','USD','$');
    currencyСhange('LTC','USD','$');
    currencyСhange('BTC','USD','$');
  }else if($(this).val() === 'eur') {
    currencyСhange('ETH','EUR','€');
    currencyСhange('LTC','EUR','€');
    currencyСhange('BTC','EUR','€');
  }else if($(this).val() === 'rub') {
    currencyСhange('ETH','RUB','₽');
    currencyСhange('LTC','RUB','₽');
    currencyСhange('BTC','RUB','₽');
  }else if($(this).val() === 'gbp') {
    currencyСhange('ETH','GBP','£');
    currencyСhange('LTC','GBP','£');
    currencyСhange('BTC','GBP','£');
  }
});

$('.block__check').click(function() {
  if( $(this).prop('checked') === true ) {
    $(this).parent().siblings('.block__list').addClass('is-hide');
    $(this).parent().siblings('.percent-list').addClass('is-show');
  }else{
    $(this).parent().siblings('.block__list').removeClass('is-hide');
    $(this).parent().siblings('.percent-list').removeClass('is-show');
  }
});
