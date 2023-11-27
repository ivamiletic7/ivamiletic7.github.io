$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('.hamburger').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".hamburger.hamburger--slider").toggleClass("is-active");
        });
});
