!function ($) {
  $(function(){
    // fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.subnav')
      , $padding = $('.subnav-padding')
      , navTop = $('.subnav').length && $('.subnav').offset().top
      , isFixed = 0

    processScroll()

    // hack sad times - holdover until rewrite for 2.1
    $nav.on('click', function () {
      if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
    })

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
        $padding.show()
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
        $padding.hide()
      }
    }
  })
  // wait for images to load?
  setTimeout(function() { $('[data-spy="scroll"]').scrollspy("refresh") }, 100)
}(window.jQuery)
