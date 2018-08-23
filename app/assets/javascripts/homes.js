(function() {
  $(document).on("ready", function() {
    init();
  });

  var init = function() {
    animation();
  };

  var goToRegistration = function() {
    $("#reg-btn").on("click", function(event) {
      event.preventDefault();
    });
  }
  var animation = function() {
    $('#clouds').animate({'opacity':0, 'background-position-x': '1000px', 'background-position-y': '0px'}, 40000, 'linear');
    $('#sun-yellow').animate({'background-position-x': '0px', 'background-position-y': '800px','opacity':1, 'background-size':'250px'}, 16000);
    $('#night').animate({'opacity':0.9}, 12000, function() {
      $('#day-time').fadeOut(4000);
      $('#day-night').fadeIn(4000);
      $('#night').animate({'opacity':0.4}, 16000);
      $('#sun-red').fadeOut(2000);
      $('#sun-yellow').fadeOut(2000);
      $('#moon').animate({'bottom':'65%','opacity':1}, 15000);
      $('#lanterns').fadeIn(4000);
      var CountLantern = 20;
      var i = 1;
      for (i = 1; i <=20; i++) {
        pendulum($(".lantern-"+i), Math.floor((Math.random() * 30) + 1));
      }
    });
    $('#parachute').animate({'bottom':'100%','opacity':0.4}, 20000);
    $('#sun-red').animate({'background-position-x': '0px', 'background-position-y': '800px','opacity':1, 'background-size':'250px'}, 16000);
  }
  var pendulum = function(element, rotation_val) {
    var elem = element;
    var rotation = rotation_val;
    var initrotation = rotation;
    var swingtime = 1603;
    var swings = 1000;
    var swingcount = 0;
    var startatcentre = true;

    if (startatcentre == true) {
      initrotation = 0;
    }

    function mainRotate() {
      elem.animate({rotate: initrotation}, 0, function () {
        elem.css("display", "block");
        rotation *= -1;
        swingcount++;
        pendulumswing();
      });
    }

    function pendulumswing() {
      elem.animate({rotate: rotation},swingtime, "swing", function(){
         rotation *= -1;
         if (swingcount >= swings) {
          pendulumrest();
        } else {
          swingcount++;
          pendulumswing();
        }

      });
    }

    function pendulumrest() {
      elem.animate({rotate: 0},(swingtime/1.5), "swing");
    }
    mainRotate();
  }

}).call(this);