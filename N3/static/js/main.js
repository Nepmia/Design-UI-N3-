/* Navbar scroll fx */
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
          $('#SPNGI').attr('width','35').attr('height','35');
      } else {
          $('.navbar').removeClass('primary-color').addClass('transparent');
          $('#SPNGI').attr('width','50').attr('height','50');
      }
    });
  });
  $(document).ready(function() {
      if($(this).scrollTop() > 20) { 
          $('.navbar').addClass('primary-color').removeClass('transparent');
          $('#SPNGI').attr('width','35').attr('height','35');
      } else {
          $('.navbar').removeClass('primary-color').addClass('transparent');
          $('#SPNGI').attr('width','50').attr('height','50');
      }
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
$('p').each( function() {
    orgText = $(this).html();
    newText = orgText.replace('.jpg','');
    $(this).html(newText);
  });
/* /.ImgContainer hover function */
/* Respsonsive wrapping and justify */
$(window).resize(function(){
    var $minW = 500;
    if ( $(window).width() < $minW) {
        $('.dsui-subcontainer').css('justify-content','center');
    }
    else if ( $(window).width() > $minW) {
        $('.dsui-subcontainer').css('justify-content','left');
    }
})
$(document).ready(function(){
    var $minW = 500;
    if ( $(window).width() < $minW) {
        $('.dsui-subcontainer').css('justify-content','center');
    }
    else if ( $(window).width() > $minW) {
        $('.dsui-subcontainer').css('justify-content','left');
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

window.addEventListener('load', function(event) {
    var targetClassName = 'flex-wrap-anim';
    var defaultDuration = '0.8s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.margin = '5px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
  });

window.addEventListener('load', function(event) {
    var targetClassName = 'flex-wrap-anim2';
    var defaultDuration = '0.8s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.margin = '5px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
});

window.addEventListener('load', function(event) {
    var targetClassName = 'flex-wrap-anim3';
    var defaultDuration = '0.8s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.margin = '5px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
});

window.addEventListener('load', function(event) {
    var targetClassName = 'flex-wrap-anim4';
    var defaultDuration = '0.8s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.margin = '5px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
});

window.addEventListener('load', function(event) {
    var targetClassName = 'flex-wrap-anim5';
    var defaultDuration = '0.8s';
  
    var dummyList = [];
    function addDummy(item, duration) {
      var top = item.offsetTop;
      var left = item.offsetLeft;
      setTimeout(function() {
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';
  
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.margin = '5px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        dummyList.push(dummyDiv);
      }, 0);
    }
  
    var conts = document.getElementsByClassName(targetClassName);
    for (var i = 0, max = conts.length; i < max; i++) {
      var cont = conts[i];
      cont.style.position = 'relative';
      var duration = cont.getAttribute('data-duration')
        || defaultDuration;
      var items = cont.getElementsByTagName('div');
      for (var i = 0, max = items.length; i < max; i++) {
        addDummy(items[i], duration);
      }
    }
  
    window.addEventListener('resize', function(event) {
      dummyList.forEach(function(dummyDiv) {
        var item = dummyDiv['__' + targetClassName + '_pair'];
        var duration = dummyDiv['__' + targetClassName + '_duration'];
        if (item.offsetTop != dummyDiv.offsetTop) {
          item.style.transition = 'all ' + duration;
          item.style.top = dummyDiv.offsetTop + 'px';
          item.style.left = dummyDiv.offsetLeft + 'px';
        } else {
          item.style.transition = '';
          item.style.left = dummyDiv.offsetLeft + 'px';
        }
      });
    });
});


/* /.Respsonsive wrapping and justify */
/* Folder navigation */
$(document).ready(function(){
    $('#Add2016').click(function(){
        var demilsez = '<div class="flex-wrap dsui-subcontainer flex-wrap-anim">{% for img in demilsez %}<div class="dsui-img-container z-depth-1" data-tilt style="cursor: pointer;"><img width="150" height="150" src="{{url_for("static", filename="demilsez/" + img)}}" class="dsui-img" style="pointer-events: none;"><p class="dsui-hover hiddenDSH ubuntuB z-depth-1" style="pointer-events: none;">{{img}}</p></div>{% endfor %}</div>';
        $('#2016Container').append(demilsez);
    })
})