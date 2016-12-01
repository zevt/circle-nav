/**
 * Created by Viet Tran on 11/30/16.
 */



jQuery(document).ready(function ($) {


    $("#btn-menu").hover(function () {
        // window.alert(" Over me");
        // $(".navbar-default .navbar-collapse").css('display','block');
    }, function () {
        // $(".navbar-default .navbar-collapse").css('display','none');
    });


        // var clickover = $(event.target);


        //

        //
        // if (!clickover.hasClass(".navbar-default .navbar-collapse")) {
        //     // $("button.navbar-toggle").click();
        //     var _opened = ( $(".navbar-collapse").css('display') == 'block');
        //     if (_opened) {
        //         window.alert("ABCD");
        //         $(".navbar-default .navbar-collapse").css('display', 'none');
        //     }
        // }

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
