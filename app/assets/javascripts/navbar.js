var activeEl = 0;
$(function() {
  var items = $('.btn-nav');
  $( items[activeEl] ).addClass('active');
  $( ".btn-nav" ).click(function() {
    $( items[activeEl] ).removeClass('active');
    $( this ).addClass('active');
    activeEl = $( ".btn-nav" ).index( this );
  });
});
jQuery(function () {
  $($('#navbarMBW .nav-item')[0]).find("div").tab('show');
  jQuery('#navbarMBW .nav-item').on('click', function() {
    $(this).find("div").tab('show');
  });
})