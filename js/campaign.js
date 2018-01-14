
$(document).ready(function() {
    var obj = 'map-canvas-contact';
    var lat = $('#'+obj).attr("data-lat");
    var lng = $('#'+obj).attr("data-lng");
    var contentString = $('#'+obj).attr("data-string");
    var myLatlng = new google.maps.LatLng(lat,lng);
    var map, marker, infowindow;
    var image = 'imgs/marker.png';
    var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);
    var styles = [{"featureType":"landscape","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":" "},{"saturation":" "}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":" "},{"saturation":" "}]}]
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"}); 
    var mapOptions = {
      zoom: zoomLevel,
      disableDefaultUI: true,
      center: myLatlng,
          scrollwheel: false,
      mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      },
      zoomControls: true
    }
    
    map = new google.maps.Map(document.getElementById(obj), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
      content: contentString
    });      
      
      marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
})