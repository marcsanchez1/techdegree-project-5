
$(document).ready(function($) {
      $('a[data-rel^=lightcase]').lightcase({
        transition: 'fadeInline',
        speedIn: 500,
        speedOut: 350,
        showSequenceInfo: false,
        showTitle: true,
      });
    });