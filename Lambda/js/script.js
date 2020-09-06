$(document).ready(function() {
  $('.top-header__burger').on('click' ,function(e) {
    $('.top-header__list').addClass('active');
    $('.promo__title').css('color', 'rgba(255, 255, 255, 0.6)');
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".top-header__nav").length || $(e.target).hasClass('top-header__link')) {
      $('.top-header__list').removeClass('active');
      $('.promo__title').css('color', 'rgba(255, 255, 255, 1)');
    } else {
      return;
    }
  });
});