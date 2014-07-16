//
// OJ.Maps
//     responsible for creating and updating the map.
//
//  Public methods:
//    .init()  : initializes the map
//    .showLegend : shows the legend
//    .map     : reference to the google.maps.Map instance
//    .geocoder: reference to the gogogle.maps.Geocoder instance
//    .icons   : list of icon urls
//        .lowWait
//        .reg
//        .kid
//        .origin
//
;(function($, window, undefined){

  window.OJ = window.OJ || {};

  OJ.Maps = {
    init: function(){
      var opts = {
        center: new google.maps.LatLng(39.8282, -98.5795), //center of america
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById('map-canvas'), opts);
      this.geocoder = new google.maps.Geocoder();
      this._legendEl = this._buildLegendEl();
      return this.map;
    },

    showLegend: function(){
      this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(this._legendEl);
    },

    icons: {
      lowWait: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=L|12f404|000000',
      reg: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=R|63D1F4|000000',
      kid: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=C|FFAA00|000000',
      origin: 'https://chart.googleapis.com/chart?chst=d_map_spin&chld=.75|0|FFFF00|11|_|O'
    },

    _buildLegendEl: function(){
      var $el = $("<div id=\"legend\" class=\"legend\"></div>");
      $el[0].innerHTML = '<p style="text-align:center;line-height:50%"><b>LEGEND</b></p>' +
        '<p><img src="' + this.icons.origin + '" />' + '  Your Location</p>' +
        '<p><img src="' + this.icons.lowWait + '" />' + '  Low-Wait Center</p>' +
        '<p><img src="' + this.icons.reg + '" />' + '  Regular Center</p>' +
        '<p><img src="' + this.icons.kid + '" />' + '  Children\'s Center</p>';

      //return regular html element (not jQuery element)
      return $el[0];
    },
  };

})(window.jQuery, this);