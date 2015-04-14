
document.getElementById('nav1').onclick = Open('two');
function Open(e){
  var expandable = document.getElementById(e);
  //$primaryImg = $this.find('.image.primary > img'),
  //$bg,
 //options;

  // No primary image? Bail.
  //if ($primaryImg.length == 0)
    //return;
  //var $body = document.getElementById('body');
  expandable.className = 'main expanded'; 
  //$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
    //                                            .css('background-image', (
      //                                                  'url("css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
        //                                        ))
          //                                      .appendTo($body);
}

