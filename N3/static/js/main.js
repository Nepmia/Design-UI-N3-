/* Navbar scroll fx */
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
      } else {
          $('.navbar').removeClass('primary-color').addClass('tranparent');
      }
    });
  });
/* DevAlert */
$(document).ready(function() {
    $("#devalertbtn").click(function(){
        $("#devalert").addClass('devalertoff').removeClass('devalerton');
        setTimeout(function(){ $("#devalert").removeClass('d-flex').addClass('d-none'); }, 1000);
    })
});
window.onload = function(){
    $("#devalert").removeClass('devalertoff').addClass('devalerton');
};
/* /.DevAlert */
/* Get Started btn */
$(document).ready(function(){
    $("#getSbtn").hover(function(){
        $("#getSbtnShine").addClass("hidden").removeClass("visible").removeClass("btnShineAN");
        $("#getSar").removeClass('down-pulse');
    },function(){
        $("#getSbtnShine").addClass("visible").removeClass("hidden").addClass("btnShineAN");
        $("#getSar").addClass('down-pulse');
    })
})
/* /.Get started btn */
/* cardHover */
$(document).ready(function(){
    $('.levitHov').hover(function(){
        $(this).addClass("cardHoverH").removeClass("cardHoverN");
        $(this).addClass("z-depth-3").removeClass("z-depth-1");
        $(this).find("i").addClass("text-black-50").removeClass("grey-text");
        $(this).find("h4").addClass("text-black-50").removeClass("grey-text");
        
    },function(){
        $(this).removeClass("cardHoverH").addClass("cardHoverN");
        $(this).addClass("z-depth-1").removeClass("z-depth-3");
        $(this).find("i").removeClass("text-black-50").addClass("grey-text");
        $(this).find("h4").removeClass("text-black-50").addClass("grey-text");

    });
    
});