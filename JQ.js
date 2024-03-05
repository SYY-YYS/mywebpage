$(document).ready(function(){
  var radius = 10; // adjust to move out items in and out 
  var fields = $('.field'),
    container = $('#container'),
    width = container.width(),
    height = container.height();
  var angle = 0,
    step = (2 * Math.PI) / fields.length;
  var y_scroll_pos = window.scrollY;
  var scroll_pos = $("#work").offset().top;

  console.log(scroll_pos);

  const circular = function() {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
    var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    // if (window.console) {
    //   console.log($(this).text(), x, y);
    // }
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  };

  const addRadiusByTime = setInterval(function(){
    y_scroll_pos = window.scrollY;
    scroll_pos = $("#work").offset().top;

    console.log(scroll_pos, y_scroll_pos);
    if(radius<=200 && y_scroll_pos >= scroll_pos) {
      radius += 5
      console.log("added 10")
    };
    fields.each(circular);
  }, 40);

  const triggerFunction = setInterval(function() {
    // console.log(1)
    if($('.container').hasClass('active')) {
      $(window).trigger('classChanged')
    }
  }, 200);
  triggerFunction
  

  $(window).on('classChanged', function(){
    addRadiusByTime

    // y_scroll_pos = window.scrollY;
    // scroll_pos = $("#work").offset().top;
    // console.log(scroll_pos)
    // if(y_scroll_pos >= scroll_pos) {
    //   $(".container").addClass("active")
    //   addRadiusByTime

    // } 
    // else {
    //   radius = 10;
    //   $(".container").removeClass("active")
    // }
    
  });

  
})

// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#container"
// }).setTween("#container", "active")
// .addTo(controller);



// $('button').click(function change() {
//     $('.field').fadeToggle();
// })

// just a hi from new computer