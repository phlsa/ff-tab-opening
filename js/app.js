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

function openTabNextToCurrentTab() {
  var nt = newTab(false, true).addClass('shifted');
  $('.type-3').find('.selected').after(nt);
  _.delay(function() {
    nt.removeClass('shifted');
  }, 25);
}

function openSelectedTabNextToCurrentTab() {
  var nt = newTab(true, false).addClass('extra-small');
  $('.type-4 .selected').removeClass('selected').after(nt);
  _.delay(function() {
    nt.removeClass('extra-small small');
  }, 25);
}

function openTabWithOverflow() {
  var nt = newTab(true, true);
  $('.type-5 .tab-helper').append(nt);
  $('.type-5 .tab:first').removeClass('selected').css({'margin-left':'-200px'});
}

function openTabWithoutOverflow() {
  var tab = $('#almost-overflow');
  var pos = tab.position();
  console.log(pos);
  tab.closest('.window').find('.tab').removeClass('selected');
  tab.removeClass('plus').addClass('selected').html( newTabContent() );
  _.delay(function() {
    tab.removeClass('small');
    tab.closest('.window').find('.tab').addClass('medium');
  }, 25);
  var nt = newSmallTab().addClass('plus hover-freeze').css({
    position: 'absolute',
    left: pos.left+'px'
  });
  tab.closest('.tabstrip').append(nt);
  _.delay(function() {
    nt.removeClass('hover-freeze');
  }, 200);
}

$(document).ready(function() {
  $('.plus:not(#almost-overflow)').click(openTabAtLastPosition);
  $('button#ctrl-t').click(function(e) {
    $('.type-2').find('.plus').click();
  });
  $('button#next-1').click(openTabNextToCurrentTab);
  $('button#next-2').click(openSelectedTabNextToCurrentTab);
  $('button#overflow').click(openTabWithOverflow);
  $('#almost-overflow').click(openTabWithoutOverflow);

  $('input[type=checkbox]').change(function(e) {
    var box = $(e.currentTarget);
    if (box.is(':checked')) {
      $('.prototype-container').addClass('slow');
    } else {
      $('.prototype-container').removeClass('slow');
    }
  });

  // on load
  var box = $('input[type=checkbox]');
  if (box.is(':checked')) {
    $('.prototype-container').addClass('slow');
  } else {
    $('.prototype-container').removeClass('slow');
  }
});





