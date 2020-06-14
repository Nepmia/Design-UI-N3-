/* Navbar scroll fx */
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
          $('#SPNGI').attr('width','35').attr('height','35');
      } else {
          $('.navbar').removeClass('primary-color').addClass('tranparent');
          $('#SPNGI').attr('width','50').attr('height','50');
      }
    });
  });
$(document).ready(function(){
    $('#NavClick').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    })
})
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

$(document).ready(function(){
    $('.dsui-img-container').hover(function(){
        $(this).find('p').addClass('visibleDSH').removeClass('hiddenDSH');
    }, function(){
        $(this).find('p').removeClass('visibleDSH').addClass('hiddenDSH');
    })
})