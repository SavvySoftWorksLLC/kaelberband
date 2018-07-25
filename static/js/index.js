$(function() {
  // jQuery Scroll Animations
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'))
    if(target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 56
        }, 500)
    }
  })

  // on scroll
  $(document).scroll(function () {
    if ($(window).scrollTop() >= 24) {
      $(".icons-return").fadeIn(2000)
    } else {
      $(".icons-return").fadeOut(1000)
    }
  })

  // splash overlay
  $.fn.center = function () {
    this.css("position","absolute")
    return this
  }
  $("#overlay").show()
  $("#overlay-content").show().center()
  setTimeout(function(){    
    $("#overlay").fadeOut( 1600, "linear" )
  }, 500)

  // gallery
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter')

    if(value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.'+value).hide('2000')
      $('.filter').filter('.'+value).show('2000')
    }
  })

  var apiKey = ""
  var calendarId = ""
  $('#calendar').fullCalendar({
      googleCalendarApiKey: apiKey,
      timezone: 'New York',
      events: {
          googleCalendarId: calendarId
      },
      eventRender: function(event, element) {
        element.qtip({
          content: event.title,
          style: 'qtip-bootstrap',
          position: {
            my: 'bottom center',
            at: 'top left'
          }
      })
    }
  })
})
