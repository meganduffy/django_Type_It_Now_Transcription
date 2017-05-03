$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// // function ShowTATInfo() {
// //   if ($(".mydivclass")[0]){
// //     $(this).removeClass
// // } else {
// //     // Do something if class does not exist
// // }
// //   document.getElementById("TATInfo").style.display = "block";
// // }
// // // function ShowTimeStampsInfo() {
// // //   document.getElementById("TimeStampsInfo").style.display = "block";
// // // }
// //
//
//
// $('.about-2-icon-box').click(function() {
//   var $t = $(this);
//
// });

// TODO: When .about-2-icon is clicked, show information tabs

    var tabFinish = 0;

    $('.about-2-icon-box').click(function () {
        var $t = $(this);
        if (tabFinish || $t.hasClass('active')) return false;
        tabFinish = 1;
        $t.closest('.about-2').find('.about-2-icon-box').removeClass('active-item');
        $t.addClass('.active-item');
        var index = $t.parent().find('.about-icon-2-box').index(this);
        $t.closest('.about-2').find('.about-description:visible').fadeOut(500, function () {
            $t.closest('.about-2').find('.about-description').eq(index).fadeIn(500,
            function () {
                tabFinish = 0;
            })
        })
    });