function reinitiateMap () {
	Meteor.autorun( function() {
		l('initiateMap');
		var selectedMap = Session.get("selectedMap");
		l(selectedMap);
		initiateMap(selectedMap);
		});
}

function initiateMap (selectedMap) {
	l(selectedMap)
	var currentMap = Maps.findOne(selectedMap);
	console.log(currentMap);
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
  	GLO_MAP =  new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  	initiateDrawing();
  	l('on charge les points');
  	_.each(currentMap.points, function(pt) {
  		displayPoint(pt);
  	});
}



function initiateDrawing () {
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
  			var newPoint = point(event.overlay.getPosition().$a,event.overlay.getPosition().ab, 'test', event.overlay.getIcon());
  			console.log(newPoint);
  			Maps.update(Session.get("selectedMap"), {$push:{"points": newPoint}});
			//TODO c'est un test
  			//var pt = displayPoint(newPoint, true);
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

	console.log(point);
  var gpt = new google.maps.Marker({
      position: new google.maps.LatLng(point.lat,point.lng),
      map: GLO_MAP,
      title: point.title
      //draggable: editable
      //image: point.image
  });
  return gpt;
}

function displayLine (line, editable) {

    var path = [];
    var points = line.points;

    if (points.length){
      if (points[0][0] === undefined){
        path = points;
      }
      else {
        for (var i=0, latlng; latlng=points[i]; i++){
          path.push(new google.maps.LatLng(latlng[0], latlng[1]));
        }
      }
    }

    var polyline_options = {
      map: GLO_MAP,
      path: path,
      strokeColor: line.strokeColor,
      strokeOpacity: line.strokeOpacity,
      strokeWeight: line.strokeWeight,
      editable: editable,
      visible: true
    };

    return new google.maps.Polyline(polyline_options);
};

