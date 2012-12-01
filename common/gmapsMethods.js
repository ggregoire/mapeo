function initiateDrawing (argument) {
	var drawingManager = new google.maps.drawing.DrawingManager({
	  drawingMode: null, //mode par défaut : drag
	  drawingControl: true, //affiche les controls
	  drawingControlOptions: {
	    position: google.maps.ControlPosition.LEFT_TOP,
	    drawingModes: [
	      google.maps.drawing.OverlayType.MARKER,
	      google.maps.drawing.OverlayType.POLYGON,
	      google.maps.drawing.OverlayType.POLYLINE,
	      google.maps.drawing.OverlayType.RECTANGLE
	    ]
	  },
	  markerOptions: {
	     //TODO : récupérer les options
	  },
	  polygonOptions: {

	  },
	  polylineOptions: {

	  },
	  rectangleOptions: {

	  }
	});
	drawingManager.setMap(Session.get("Map"));


	google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
  	switch (event.type) {
  		case google.maps.drawing.OverlayType.MARKER:

  		break;
  		case google.maps.drawing.OverlayType.POLYGON:

  		break;
  		case google.maps.drawing.OverlayType.POLYLINE:

  		break;
  		case google.maps.drawing.OverlayType.RECTANGLE:

  		break;
  	} 
});
}





function displayPoint (point, editable) {

  return google.maps.Marker({
      position: new google.maps.LatLng(point.lat,point.lng),
      map: Session.get("Map"),
      title: point.title,
      draggable: editable,
      image: point.image
  });
}

function displayLine (line, editable) {

	  poly = new google.maps.Polyline({
		strokeColor: line.color,
	    strokeOpacity: line.opacity,
	    strokeWeight: line.weight,
	    editable: editable
	  });
	  poly.setMap(Session.get("Map"));
	  return poly;
}

