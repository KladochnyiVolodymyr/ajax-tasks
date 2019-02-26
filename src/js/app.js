import sayHello from './lib/sayHello.js';
import './components/exchanger.js';
import './components/form.js';
import './components/weather.js';
import './components/lodash-task';
//import './components/new-exchanger.js';
sayHello();

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  success: function(result) {
    let titles = result.map(function(title) {
      return '<li><a class="js-link" href="#" data-id="'+ title.id +'">' + title.title + '</a></li>';
    });
    $('.list').html(titles);
    $('.js-link').click(function(e) {
      //e.preventDefault();
      $('.comments').html('');
      $('.js-comment').addClass('is-active');
      let dataAttr = $(this).data('id');
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts?id='+ dataAttr +'',
        success: function(info) {
          $('.post__title').html(info[0].title);
          $('.post__content').html(info[0].body);
          //$('.post__btn').attr('data-id',info[0].id);
        },
        error: function(data) {
        }
      });
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments?postId='+ dataAttr +'',
        success: function(comments) {
          let commentsArr = comments.map(function(comment) {
            return '<div class="comment"><p class="comment__name">'+ comment.name +'</p><p class="comment__email">'+ comment.email +'</p><p class="comment__body">'+ comment.body +'</p></div>';
          });
          $('.comments').html(commentsArr);
        },
        error: function(data) {   
        }
      });
    });
    /* $('.js-comment').click(function() {
      let btnDataAttr = $(this).attr('data-id');
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments?postId='+ btnDataAttr +'',
        success: function(comments) {
          let commentsArr = comments.map(function(comment) {
            return '<div class="comment"><p class="comment__name">'+ comment.name +'</p><p class="comment__email">'+ comment.email +'</p><p class="comment__body">'+ comment.body +'</p></div>';
          });
          $('.comments').html(commentsArr);
        },
        error: function(data) {   
        }
      });
    }); */
  },
  error: function(data) {
  }
});



