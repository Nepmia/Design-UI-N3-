/* Navbar scroll fx */
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
      } else {
          $('.navbar').removeClass('primary-color').addClass('transparent');
      }
    });
  });
  $(document).ready(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
      } else {
          $('.navbar').removeClass('primary-color').addClass('transparent');
      }
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
    $('.navbar').css('transform','translateY(0px)');
    setTimeout(function(){ $('#preloader').addClass('hidden'); }, 200);
    setTimeout(function(){ $('#preloader').addClass('d-none').removeClass('d-flex')},500);
};
/* ImgContainer hover function */
$(document).ready(function(){
    $('.dsui-img-container').hover(function(){
    var $HT = 25;
        if ( $(this).find('p').height() < $HT){

        
        $(this).find('p').addClass('visibleDSH').removeClass('hiddenDSH');
    } else if ($(this).find('p').height() > $HT){
        $(this).find('p').addClass('visibleDSHH').removeClass('hiddenDSH');
    }}, function(){
        $(this).find('p').removeClass('visibleDSH').addClass('hiddenDSH').removeClass('visibleDSHH');
    })
})
/* Respsonsive script */
$(window).resize(function(){
    var $minW = 500;
    if ( $(window).width() < $minW) {
        $('.dsui-subcontainer').css('justify-content','center');
        $('#viewer-img').addClass('vi2').removeClass('vi');
        $('#imgload').removeClass('circle-loader').addClass('circle-loader2');
    }
    else if ( $(window).width() > $minW) {
        $('.dsui-subcontainer').css('justify-content','left');
        $('#viewer-img').addClass('vi').removeClass('vi2');
        $('#imgload').removeClass('circle-loader2').addClass('circle-loader');
    } 
})
$(document).ready(function(){
    var $minW = 500;
    if ( $(window).width() < $minW) {
        $('.dsui-subcontainer').css('justify-content','center');
        $('#viewer-img').addClass('vi2').removeClass('vi');
        $('#imgload').removeClass('circle-loader').addClass('circle-loader2');
    }
    else if ( $(window).width() > $minW) {
        $('.dsui-subcontainer').css('justify-content','left');
        $('#viewer-img').addClass('vi').removeClass('vi2');
        $('#imgload').removeClass('circle-loader2').addClass('circle-loader');
    }
})
$(document).ready(function(){
    var $minW = 900;
    if ( $(window).width() < $minW) {
        $("#devalert").addClass('devalertoff').removeClass('devalerton');
        setTimeout(function(){ $("#devalert").removeClass('d-flex').addClass('d-none'); }, 1000);
    }
})
$(window).resize(function(){
    var $minW = 900;
    if ( $(window).width() < $minW) {
        $("#devalert").addClass('devalertoff').removeClass('devalerton');
        setTimeout(function(){ $("#devalert").removeClass('d-flex').addClass('d-none'); }, 1000);
    }
})

/* IMG Viewer */
$(document).ready(function(){
  $('.dsui-img-container').click(function(){
    var $img = $("viewer-img").height();
    var $win = $(window).height();
    var $vid = $(this).find('img').attr('id');
    var $dir = $("#" + $vid + "_V").attr('src');
    $('#img-viewer').removeClass('d-none').addClass('d-flex');
    $('#antyc').removeClass('d-none');
    $('#dsuioff').removeClass('d-none')
    setTimeout(function () {$('#img-viewer').removeClass('hidden').addClass('visible');$('#dsuioff').removeClass('hidden').addClass('visible');},200);
    $('.navbar').css('transform','translateY(-60px)');
    $('#viewer-img').attr('src', $dir)
    $("img").one("load", function() {
      setTimeout(function(){$('#imgload').addClass('hidden').removeClass('visible');$('#viewer-img').removeClass('s1').addClass('s2');},500);
    }).each(function() {
      if(this.complete) {
          $(this).load();
          setTimeout(function(){$('#imgload').addClass('hidden').removeClass('visible');$('#viewer-img').removeClass('s1').addClass('s2');},500);
      }
    });
  });
});
$(document).ready(function(){
  $('#antyc').click(function(){
    $('#viewer-img').removeClass('s2').addClass('s1');
    setTimeout(function(){
      $('#viewer-img').attr('src', '');
      $('#img-viewer').removeClass('visible').addClass('hidden');
      $("#devalert").addClass('devalertoff').removeClass('devalerton');
      $("#antyc").addClass('d-none');
      setTimeout( function() {$('#img-viewer').removeClass('d-flex').addClass('d-none');$('#dsuioff').addClass('d-none');$('#imgload').removeClass('hidden').addClass('visible');},500);
      $('.navbar').css('transform','translateY(0px)');
      $('#dsuioff').addClass('hidden').removeClass('visible');
      
    },200)
  })
})
$(document).ready(function(){
  $('#dsuioff').click(function(){
    $('#viewer-img').removeClass('s2').addClass('s1');
    setTimeout(function(){
      $('#viewer-img').attr('src', '');
      $('#img-viewer').removeClass('visible').addClass('hidden');
      $('#antyc').addClass('d-none');
      setTimeout( function() {$('#img-viewer').removeClass('d-flex').addClass('d-none');$('#dsuioff').addClass('d-none');$('#imgload').removeClass('hidden').addClass('visible');},500);
      $('.navbar').css('transform','translateY(0px)');
      $('#dsuioff').addClass('hidden').removeClass('visible');
      
    },200)
  })
})


/* Home pans and quick nav link navitation */

$(document).ready(function(){
  $('.year-picker-img').hover(function(){
      $(this).parent().removeClass('z-depth-1').addClass('z-depth-5');
      
  },function(){
    $(this).parent().addClass('z-depth-1').removeClass('z-depth-5');
  });
  
});





$(document).ready(function(){
  $('#Nav2016').click(function(){
    location.hash = "2016";
  });
  $('#Nav2017').click(function(){    
    location.hash = "2017";
  });
  $('#Nav2018').click(function(){
    location.hash = "2018";
  });
  $('#Nav2019').click(function(){
    location.hash = "2019";
  });
  $('#Nav2020').click(function(){
    location.hash = "2020";
  });
  $('#NavClick').click(function(){
    location.hash = "home";
  });
});
$(document).ready(function(){
  $('#yp2016').click(function(){
    location.hash = "2016";
  });
  $('#yp2017').click(function(){
    location.hash = "2017";
  });
  $('#yp2018').click(function(){
    location.hash = "2018";
  });
  $('#yp2019').click(function(){
    location.hash = "2019";
  });
  $('#yp2020').click(function(){
    location.hash = "2020";
  });
});


$(document).ready(function(){
  $('#NavM').click(function(){
    var $t = $('#SideNav')
    if ($t.hasClass('sidenavL')){
        $t.removeClass('sidenavL').addClass('sidenavR');
        $('#bgd').css('pointer-events','').removeClass('bgdh').addClass('bgdv');
        $('.navbar').css('transform','translateY(-60px)');
    } else if ($t.hasClass('sidenavR')){
      $t.addClass('sidenavL').removeClass('sidenavR');
      $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
      $('.navbar').css('transform','translateY(0px)');
    }
  })
  $('#bgd').click(function(){
    if ($('#SideNav').hasClass('sidenavR')){
      $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
      $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
      $('.navbar').css('transform','translateY(0px)');
    }
  })
  $('#SideOff').click(function(){
    if ($('#SideNav').hasClass('sidenavR')){
      $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
      $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
      $('.navbar').css('transform','translateY(0px)');
    }
  })
})


$(document).ready(function(){
  $('.year-picker-container').hover(function(){
    $(this).find('.ypt').removeClass('trsY').addClass('trsYn');
  }, function(){
    $(this).find('.ypt').removeClass('trsYn').addClass('trsY');
  })
})



/* Hash navigation, forward backward reload permission */


$(window).on('hashchange', function () {
  var $hash = location.hash;
  var $2016 = $('.2016Container');
  var $2017 = $('.2017Container');
  var $2018 = $('.2018Container');
  var $2019 = $('.2019Container');
  var $2020 = $('.2020Container');
  var $n2016 = $('#Nav2016');
  var $n2017 = $('#Nav2017');
  var $n2018 = $('#Nav2018');
  var $n2019 = $('#Nav2019');
  var $n2020 = $('#Nav2020');
  var $nhome = $('#NavClick');
  var $home1 = $('.home1');
  var $hc = $('.ypc');
  var $b = $('#body');
  if ( $hash == '#2016'){
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $2016.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2016.removeClass('hoverSN').addClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#home') {
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $home1.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $hc.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $nhome.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere'); 
    $b.css('background-image',"url('img/DSUIHBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2017'){
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $2017.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2017.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2018') {
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $2018.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2018.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2019') {
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $2019.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2019.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2020') {
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $2020.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2020.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ( $hash == '#home') {
    $('#fader').removeClass('hidden').addClass('visible');
    setTimeout(function(){
      $('#fader').removeClass('visible').addClass('hidden');
    },900);
    setTimeout(function(){ $home1.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $hc.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $nhome.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere'); 
    $b.css('background-image',"url('img/DSUIHBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
});

$(document).ready(function(){
  var $hash = location.hash;
  var $2016 = $('.2016Container');
  var $2017 = $('.2017Container');
  var $2018 = $('.2018Container');
  var $2019 = $('.2019Container');
  var $2020 = $('.2020Container');
  var $n2016 = $('#Nav2016');
  var $n2017 = $('#Nav2017');
  var $n2018 = $('#Nav2018');
  var $n2019 = $('#Nav2019');
  var $n2020 = $('#Nav2020');
  var $nhome = $('#NavClick');
  var $home1 = $('.home1');
  var $hc = $('.ypc');
  var $b = $('#body');
  if ( $hash == '#2016'){
    setTimeout(function(){ $2016.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2016.removeClass('hoverSN').addClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#home') {
    setTimeout(function(){ $home1.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $hc.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $nhome.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere'); 
    $b.css('background-image',"url('img/DSUIHBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2017'){
    setTimeout(function(){ $2017.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2017.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2018') {
    setTimeout(function(){ $2018.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2018.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2019') {
    setTimeout(function(){ $2019.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2019.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ($hash == '#2020') {
    setTimeout(function(){ $2020.addClass('visible').removeClass('hidden').removeClass('d-none');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $n2020.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $nhome.addClass('hoverSN').removeClass('uhere');
    $home1.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex');
    $hc.addClass('d-none').addClass('hidden').removeClass('visible').removeClass('d-flex'); 
    $b.css('background-image',"url('img/DSUIBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
  else if ( $hash == '#home') {
    setTimeout(function(){ $home1.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $hc.addClass('visible').removeClass('hidden').removeClass('d-none').addClass('d-flex');
    $2016.addClass('d-none').addClass('hidden').removeClass('visible');
    $2017.addClass('d-none').addClass('hidden').removeClass('visible');
    $2018.addClass('d-none').addClass('hidden').removeClass('visible');
    $2019.addClass('d-none').addClass('hidden').removeClass('visible');
    $2020.addClass('d-none').addClass('hidden').removeClass('visible');
    $nhome.removeClass('hoverSN').addClass('uhere');
    $n2016.addClass('hoverSN').removeClass('uhere');
    $n2017.addClass('hoverSN').removeClass('uhere');
    $n2018.addClass('hoverSN').removeClass('uhere');
    $n2019.addClass('hoverSN').removeClass('uhere');
    $n2020.addClass('hoverSN').removeClass('uhere'); 
    $b.css('background-image',"url('img/DSUIHBG.jpg')");
    $('#SideNav').addClass('sidenavL').removeClass('sidenavR');
    $('#bgd').css('pointer-events','none').removeClass('bgdv').addClass('bgdh');
    $('.navbar').css('transform','translateY(0px)');},400);
    $('#DSUIPOP').addClass('DSUIPOP');
    setTimeout( function() {$('#DSUIPOP').removeClass('DSUIPOP');},1500);
  }
});

$(document).ready(function (){
  var $hash = location.hash;
  if ($hash == '') {
    location.hash = 'home';
  }
})

/* End */