
function initiateMap () {
	var mapToReturn;
	Meteor.autorun(function(){
		var currentMap = Maps.findOne(Session.get("selectedMap"));
		console.log(currentMap.name);
		var mapOptions = {
		    zoom: 4,
		    center: new google.maps.LatLng(-25.363882,131.044922),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    disableDefaultUI: true,
		    mapTypeControl: true,
		    mapTypeControlOptions: {
		        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		        position: google.maps.ControlPosition.TOP_LEFT
		    },
		    panControl: true,
		    panControlOptions: {
		        position: google.maps.ControlPosition.LEFT_TOP
		    },
		    zoomControl: true,
		    zoomControlOptions: {
		        style: google.maps.ZoomControlStyle.SMALL,
		        position: google.maps.ControlPosition.LEFT_TOP
		    },
		    scaleControl: true,
		    scaleControlOptions: {
		        position: google.maps.ControlPosition.RIGHT_BOTTOM
		    }
	  	}
	  	mapToReturn =  new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	});
	return mapToReturn;
}



function initiateDrawing () {
	Meteor.autorun(function(){
		var drawingManager = new google.maps.drawing.DrawingManager({
		  drawingMode: null, //mode par défaut : drag
		  drawingControl: true, //affiche les controls
		  drawingControlOptions: {
		    position: google.maps.ControlPosition.BOTTOM,
		    drawingModes: [
		      google.maps.drawing.OverlayType.MARKER,
		      google.maps.drawing.OverlayType.POLYGON,
		      google.maps.drawing.OverlayType.POLYLINE,
		      google.maps.drawing.OverlayType.RECTANGLE
		    ]
		  },
		  markerOptions: {
		     draggable: true
		  },
		  polygonOptions: {
		  	editable: true
		  },
		  polylineOptions: {
		  	editable: true
		  },
		  rectangleOptions: {
		  	editable: true
		  }
		});
		drawingManager.setMap(GLO_MAP);


		google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
	  	switch (event.type) {
	  		case google.maps.drawing.OverlayType.MARKER:
	  			Maps.update(Maps[Session.get("MapID")].id, {points: [{latlng: event.overlay.getPosition(), title: 'test', image: event.overlay.getIcon()}]});
				//TODO c'est un test
	  			displayPoint(Maps[Session.get("MapID")].points[0], true);
	  		break;
	  		case google.maps.drawing.OverlayType.POLYGON:

	  		break;
	  		case google.maps.drawing.OverlayType.POLYLINE:

	  		break;
	  		case google.maps.drawing.OverlayType.RECTANGLE:

	  		break;
	  	} 
  	})
});
}





function displayPoint (point, editable) {

  return google.maps.Marker({
      position: point.latlng,
      map: GLO_MAP,
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
	  poly.setMap(GLO_MAP);
	  return poly;
}

