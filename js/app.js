function newTab( selected ) {
  var sel = "";
  if (selected) sel = "selected";
  return $('<div class="tab small '+sel+'">'+newTabContent()+'</div>');
}

function newTabContent() {
  return '<span class="caption">New Tab</span><div class="close"></div>';
}

function newSmallTab() {
  return $('<div class="tab small"><span class="caption">+</span></div>');
}

$(document).ready(function() {
  $('.plus').click(function(e) {
    $('.selected').removeClass('selected');
    $(e.currentTarget).html(newTabContent()).removeClass('plus');

    // animate tab size
    _.delay(function(){
      $(e.currentTarget).removeClass('small plus').addClass('selected');
    }, 25);

    // create new plus tab
    _.delay(function() {
      var nt = newSmallTab();
      $(e.currentTarget).after(nt);
      _.delay(function() {
        nt.addClass('plus');
      }, 25);
    }, 25);
  });
});