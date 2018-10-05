$('.tabs__list').on('click', 'a', function(event) {

    event.preventDefault();
    const $listID = $(this).parent();
    const $panelID = $(this.hash);
    $('.tabs__panel').removeClass('is-active');
    $('.tabs__item').removeClass('is-active');

    //$panelID.not('.is-active').addClass('is-active');
    //$listID.not('.is-active').addClass('is-active'); 
    $listID.addClass('is-active');
    $panelID.addClass('is-active');
});