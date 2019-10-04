
// Sticky navigation
$("#search-input").sticky({
  topSpacing: 0
});

// Settings for lightbox
$(document).ready(function($) {
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'fadeInline',
    showSequenceInfo: false,
    showTitle: true,
  });
});

// Search to filter image based on user's input and image alt tag
$('#photo-search').keyup(function() {
  let val = $.trim(this.value);
  if (val === '') {
    $('img').show();
  } else {
    $('img').hide();
    $('img').each((i, img) => {
      let altText = img.alt.normalize('NFD');
      if((altText.toLowerCase()).indexOf(val.toLowerCase()) > -1) {
        $(img).show();
      } 
    });
  }
});
