$(function(){
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var gato = this.hash;

          $('html, body').animate({
            scrollTop: (($(gato).offset().top)-110)
          }, 900, function(){
                window.location.hash = gato-110;
              });
            }
          });

            $('[data-toggle="tooltip"]').tooltip()

        });

  
