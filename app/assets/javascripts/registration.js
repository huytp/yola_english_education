(function() {
  $(document).on("ready", function() {
    init();
  });

  var init = function() {
    validateForm();
    changeLanguage();
  };

  var validateForm = function() {
    $(".yl-btn").click(function() {
      processWhenSubmit();
      $("#yola-form-registration").submit();
    });
  }

  var processWhenSubmit = function() {
    $("#yola-form-registration").validate({
      rules: {
        "full_name_person_send": {
          required: true
        },
        "phone_person_send": {
          required: true,
          number: true,
          maxlength: 20
        },
        "email": {
          required: true,
          email: true
        },
        "full_name_person_receive": {
          required: true
        },
        "message": {
          required: false
        },
        "address": {
          required: true
        },
        "phone_person_receive": {
          required: true,
          number: true,
          maxlength: 20
        },
        "reg[dream]": {
          required: true
        },
        "message": {
          required: true
        }
      }
    });
  }

  var changeLanguage = function() {
    $.extend( $.validator.messages, {
      required: "Hãy nhập.",
      remote: "Hãy sửa cho đúng.",
      email: "Hãy nhập email.",
      url: "Hãy nhập URL.",
      date: "Hãy nhập ngày.",
      dateISO: "Hãy nhập ngày (ISO).",
      number: "Hãy nhập số.",
      digits: "Hãy nhập chữ số.",
      creditcard: "Hãy nhập số thẻ tín dụng.",
      equalTo: "Hãy nhập thêm lần nữa.",
      extension: "Phần mở rộng không đúng.",
      maxlength: $.validator.format( "Hãy nhập từ {0} kí tự trở xuống." ),
      minlength: $.validator.format( "Hãy nhập từ {0} kí tự trở lên." ),
      rangelength: $.validator.format( "Hãy nhập từ {0} đến {1} kí tự." ),
      range: $.validator.format( "Hãy nhập từ {0} đến {1}." ),
      max: $.validator.format( "Hãy nhập từ {0} trở xuống." ),
      min: $.validator.format( "Hãy nhập từ {1} trở lên." )
    } );
  }

}).call(this);
