
$('.form').submit(function() { 
  var form_data = $(this).serialize(); 
  $.ajax({
    type: 'POST',
    url: 'action.php', 
    data: form_data,
    success: function() {
    }});
});
$.ajax({
  url: 'users.json',
  success: function(users) {
    let usersList = users.map(function(user,item) {
      return '<li>'+ users[item] +'</li>';
    });
    $('.users-list').html(usersList);
  },
  error: function(data) {
  }
});
