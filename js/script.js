
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
  // val = val.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (val === '') {
    $('img').show();
  } else {
    $('img').hide();
    $('img').each((i, img) => {
      let imgAlt = img.alt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if((imgAlt.toLowerCase()).indexOf(val.toLowerCase()) > -1) {
        $(img).show();
      }
    });
  }
});
