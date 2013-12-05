function newTab( selected, expanded ) {
  var sel = "";
  if (selected) sel = "selected";
  var small = "small";
  if (expanded) small = ""
  return $('<div class="tab '+small+' '+sel+'">'+newTabContent()+'</div>');
}

function newTabContent() {
  return '<span class="caption">New Tab</span><div class="close"></div>';
}

function newSmallTab() {
  return $('<div class="tab small"><span class="caption">+</span></div>');
}

function openTabAtLastPosition(e) {
  $(e.currentTarget).closest('.window').find('.selected').removeClass('selected');
    $(e.currentTarget).html(newTabContent()).removeClass('plus');

    // animate tab size
    _.delay(function(){
      $(e.currentTarget).removeClass('small plus').addClass('selected');
    }, 25);

    // create new plus tab
    var nt = newSmallTab();
    $(e.currentTarget).after(nt);
    _.delay(function() {
      nt.addClass('plus');
    }, 25);
}

function openTabNextToCurrentTab(win) {
  var nt = newTab(false, true).addClass('shifted');
  win.find('.selected').after(nt);
  _.delay(function() {
    nt.removeClass('shifted');
  }, 25);
}

$(document).ready(function() {
  $('.plus').click(openTabAtLastPosition);
  $('button#ctrl-t').click(function(e) {
    $('.type-2').find('.plus').click();
  });
  $('button#next-1').click(function(e) {
    openTabNextToCurrentTab( $('.type-3') );
  });
  $('button#next-2').click(function(e) {
    var nt = newTab(true);
    $('.type-4 .selected').removeClass('selected').after(nt);
    _.delay(function() {
      nt.removeClass('small');
    }, 25);
  });
});





