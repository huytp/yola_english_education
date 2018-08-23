(function(){
  $(document).on("ready", function() {
    init();
  });

  var init = function() {
    updateCheckbox();
  };
  updateCheckbox = function() {
    $("input[type=checkbox]").on("click", function() {
      var id = $(this).attr('class');
      var value = $(this).val();
      window.location.href = Routes.update_sent_admin_index_path(id,value);
    });

  }

}).call(this)

