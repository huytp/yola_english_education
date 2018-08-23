(function() {
  $(document).on("ready", function() {
    init();
  });

  var init = function() {
    closeModal();
    facebookFunction();
  };

  var closeModal = function() {
    if($.cookie('popup_facebook_box') != 'yes'){
      $('#fb-box-background').delay(100).fadeIn('medium');
      $('#fclose-button, #fb-box-close').click(function(){
      $('#fb-box-background').stop().fadeOut('medium');
      });
      $('#fclose-button').click(function(){
        $.cookie('popup_facebook_box', 'yes', { path: '/', expires: 10 });
      });
    }
  }

  var facebookFunction = function() {
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=988867134544223&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}).call(this);





