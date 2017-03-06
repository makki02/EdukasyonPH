var qsRegex;
var buttonFilter;
var filterValue;

var $grid = $('.grid').isotope({
  itemSelector: '.school-item',
  layoutMode: 'fitRows',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var filterResult = filterValue ? $this.is( filterValue ) : true;
    return searchResult && filterResult;
  }
});

$('.filters-select').on( 'change', function() {
  filterValue = this.value;
  $grid.isotope();
});

var $quicksearch = $('#quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );
  
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  };
}

$(".filters-select").select2({
  theme: "bootstrap",
});

$(self._select2).parent().find(".select2-container").css('width', '');
