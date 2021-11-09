$('.modal-checkin').click(function(){
    $("#modal-checkin").modal('show');
    if(!$('.black-filter').hasClass('hide') && $('.sideBar').hasClass('noCollapse') && $(".btn-open-sidebar").hasClass('hide')){
        $('.black-filter').addClass('hide')
        $('.sideBar').removeClass('noCollapse')
        $(".btn-open-sidebar").removeClass('hide')
    }
})