//check if button has class validated on every blur
function buttonCheck() {
  if ( $('#first-name').hasClass("validated") && $('#last-name').hasClass("validated") && $('#email').hasClass("validated") && $('#email-again').hasClass("validated") && $('#password').hasClass("validated") && $('#password-again').hasClass("validated") ) {
    $("#submit").removeAttr("disabled");
  }
}

function notBlank (id, char_length) {
  $(id).on('blur', function() {
    var value = $(this).val();

    if (value.length >= char_length) {
      $(this).css('border-bottom', '3px solid lightgreen');
      $(this).removeClass("shake");
      $(this).addClass("validated");
    } else {
      $(this).css('border-bottom', '3px solid tomato');
      $(this).addClass("shake");
      $(this).removeClass("validated");
    };

    buttonCheck();

  });
}


notBlank('#first-name', 2);
notBlank('#last-name', 2);
notBlank('#password', 6);
notBlank('#password-again', 6);


function validateEmail(id) {
  $(id).on('blur', function() {
    var value = $(this).val();
    var atpos=value.indexOf("@");
    var dotpos=value.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=value.length)
      {
        $(this).css('border-bottom', '3px solid tomato');
        $(this).addClass("shake");
        $(this).removeClass("validated");
      } else {
        $(this).css('border-bottom', '3px solid lightgreen');
        $(this).addClass("validated");
      }
    });
  buttonCheck();
}


validateEmail('#email');
validateEmail('#email-again');


function compare(id1, id2) {
  $(id2).on('blur', function(){
    var pw = $(id1).val();
    var pw2 = $(id2).val();
    if ( pw != pw2 ) {
      $(id1).css('border-bottom', '3px solid tomato');
      $(id1).removeClass("validated");
      $(id2).css('border-bottom', '3px solid tomato');
      $(id2).removeClass("validated");
    } else if ( pw === pw2 ) {
      $(id1).css('border-bottom', '3px solid lightgreen');
      $(id1).addClass("validated");
      $(id2).css('border-bottom', '3px solid lightgreen');
      $(id2).addClass("validated");
    };
    buttonCheck();
  });
}

compare('#email', '#email-again');
compare('#password', '#password-again');

