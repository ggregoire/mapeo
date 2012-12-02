function allowRendering () {
	Meteor.autorun( function() {
		var selectedMap = Session.get("selectedMap");
		console.log("je pense que selecteMap a change : " + Session.get("selectedMap"))
		
		var currentMap = Maps.findOne(selectedMap,{reactive:false});
		displayMap(currentMap);
	});	
}

function displayMap (currentMap) {

	var mapOptions = {
	    zoom: currentMap.zoom,
	    center: new google.maps.LatLng(currentMap.centerLat,currentMap.centerLng),
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
  	GLO_MAP.markers = [];
  	initiateDrawing();

  	applyFilter(currentMap.filter);
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
	  			var isEditable = true;
	  			var newPoint = point(event.overlay.getPosition().$a,event.overlay.getPosition().ab, 'test', event.overlay.getIcon(), isEditable);
	  			console.log(newPoint);
	  			console.log("lol");
	  			console.log(event);
	  			var pointId = Points.insert(newPoint);
	  			event.overlay.setMap();
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

function displayPoints (){

	var handle = Points.find({idMap:Session.get("selectedMap")}).observe({
		added : function(pt,id){
			displayPoint(pt, true);
		},
		removed:function(pt,id){
			removePoint(pt);
		},
		udpated:function(pt,id){
			GLO_MAP.markers.forEach(function(mrk){
				if(mrk.meteor_id == pt._id){
					mrk.LatLng = new google.maps.LatLng(pt.lat, pt.lng);
				}
			});
		},
	})


}



function displayPoint (point, editable) {
	  var gpt = new google.maps.Marker({
	      position: new google.maps.LatLng(point.lat,point.lng),
	      map: GLO_MAP,
	      title: point.title,
	      draggable: point.isEditable
	      //image: point.image
	  });
	  gpt.set("meteor_id",point._id);
	  GLO_MAP.markers.push(gpt);


	  google.maps.event.addListener(gpt, 'position_changed', function(){
	  	Points.update(Points.find({_id:gpt.meteor_id}), {lat: gpt.getPosition().$a, lng: gpt.getPosition().ab});
	  })


	  return gpt;
}

function removePoint(point){
	a("removed Point ?")
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

