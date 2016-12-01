/**
 * Created by Viet Tran on 11/30/16.
 */



jQuery(document).ready(function ($) {

    var x = document.querySelector("button .navbar-toggle");
    if (x == null)
        window.alert(" Over me");

    $("button > .navbar-toggle").hover(function () {
        window.alert(" Over me");
        $(".navbar-default, .navbar-default .navbar-collapse").css('display','block');
    });

});