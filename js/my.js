var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {
        
        celular = true;

        $('body').addClass('mobile')
        $(function(){
            if($('body').hasClass('mobile') && !$('body').hasClass('body-profile')){
              $('.default-profile-picture').toggleClass('hide unhide')
            }
          });

        
        $('.btn-cargo-signin').addClass('hide')
        $('.btn-cargo-details').addClass('hide')
        $('.btn-cargo-contact').html(`<i class="fas fa-phone mx-1"></i>`)
        $('.cargo-img-desktop').addClass('hide')
        $('.cargo-img-mobile').toggleClass('hide')

    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        tablet = true;

        $('.cargo-img-desktop').toggleClass('hide')
        console.log("Tablet")

        $('.btn-cargo-details').css("display", "none") 
        $('.btn-cargo-contact').html(`<i class="fas fa-phone mx-1"></i>`)
        $('.cargo-img-desktop').addClass('hide')
        $('.cargo-img-mobile').toggleClass('hide')

    } else if (window.screen.width > 1025) {
        $('.bg-baixeApp').toggleClass('hide')
        pc = true;
    }
});

$('.black-filter').click(function(){
    $(this).toggleClass('hide')
    $('.sideBar').toggleClass('noCollapse')
    $(".btn-open-sidebar").toggleClass('hide')
})

$('.switch-picture').hover(function () {
        $('#my-picture').addClass('bg-switch-picture')
    }, function () {
        $('#my-picture').removeClass('bg-switch-picture')
    }
);

$('.btn-open-sidebar').click(function () {
    $('.sideBar').toggleClass('noCollapse')
    $(".btn-open-sidebar").toggleClass('hide')
    $('.black-filter').toggleClass('hide')
})

$('.btn-close-sidebar').click(function () {
    $('.sideBar').toggleClass('noCollapse')
    $(".btn-open-sidebar").toggleClass('hide')
    $('.black-filter').toggleClass('hide')
})

var btnSaveAdd = document.querySelector('.btn-save-add-toggler')

function onChangeText(e, classname) {
    // $(`.${classname}`)[e.value ? 'addClass' : 'removeClass']('filled')
    if(e.value){
        $(`.${classname}`).addClass('filled')
        $(`.${classname}`).removeClass('empty')
    } else{
        $(`.${classname}`).addClass('empty')
        $(`.${classname}`).removeClass('filled')
    }
}

function onFocus(classname) {
    $(`.${classname}`).addClass('focused')
    $(`.${classname}`).removeClass('blur')
}
function onBlur(classname) {
    $(`.${classname}`).removeClass('focused')
    $(`.${classname}`).addClass('blur')
}