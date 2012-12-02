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
  	GLO_MAP.lines = [];
  	initiateDrawing();
}

function applyMapFilter(){
	var handle = Maps.find({idMap:Session.get("selectedMap")},{fields:{"filter":1}}).observe({
		udpated:function(filter,id){
  			applyFilter(currentMap.filter);
		},
	})
}

function initiateDrawing () {
	var drawingManager = new google.maps.drawing.DrawingManager({
	  drawingMode: null, //mode par défaut : drag
	  drawingControl: true, //affiche les controls
	  drawingControlOptions: {
	    position: google.maps.ControlPosition.BOTTOM,
	    drawingModes: [
	      google.maps.drawing.OverlayType.MARKER,
	      //google.maps.drawing.OverlayType.POLYGON,
	      //google.maps.drawing.OverlayType.RECTANGLE,
	      google.maps.drawing.OverlayType.POLYLINE
	    ]
	  },
	  markerOptions: {
	     draggable: true
	  },/*
	  polygonOptions: {
	  	editable: true
	  },
	  rectangleOptions: {
	  	editable: true
	  },*/
	  polylineOptions: {
	  	editable: true
	  }
	});
	drawingManager.setMap(GLO_MAP);

	google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
	  	switch (event.type) {
	  		case google.maps.drawing.OverlayType.MARKER:
	  			var isEditable = true;
	  			var newPoint = point(event.overlay.getPosition().$a,event.overlay.getPosition().ab, '', null, isEditable);
	  			Points.insert(newPoint);
	  			event.overlay.setMap();
	  		break;
	  		/*case google.maps.drawing.OverlayType.POLYGON:
	  			
	  		break;*/
	  		case google.maps.drawing.OverlayType.POLYLINE:
				var isEditable = true;
	  			var newLine = line(event.overlay.getPath().getArray().map(function(linar){return [linar.$a,linar.ab]}),null,null,null, isEditable);
	  			l(newLine);
	  			Lines.insert(newLine);
	  			event.overlay.setMap();
	  		break;
	  		/*case google.maps.drawing.OverlayType.RECTANGLE:

	  		break;*/
	  	} 
	  	
	});
}

function displayPoints (){

	Meteor.autorun(function(){
		var handle = Points.find({idMap:Session.get("selectedMap")}).observe({
			added : function(pt,id){
				console.log("point ajouté");
				displayPoint(pt, true);
			},
			removed:function(pt,id){
				removePoint(pt);
			},
			changed:function(pt,id){
				GLO_MAP.markers.forEach(function(mrk){
					if(!mrk.dragging && mrk.meteor_id == pt._id){
					//if(mrk.meteor_id == pt._id){
						mrk.setPosition(new google.maps.LatLng(pt.lat, pt.lng));
						return;
					}
				});
			},
		});
	});
}

function displayPoint (point, editable) {
	var size = new google.maps.Size(22, 22, "px", "px");

	var origin = new google.maps.Point(22*point.image,22*GLO_MAP.filter);

	var icon = new google.maps.MarkerImage("http://path/to/sprite.png", size, origin, null, null);

	  var gpt = new google.maps.Marker({
	      position: new google.maps.LatLng(point.lat,point.lng),
	      map: GLO_MAP,
	      title: point.title,
	      draggable: point.isEditable,
	      icon: new google.maps.MarkerImage('img/star.svg', size, origin,null, null)
	  });
	  gpt.set("meteor_id",point._id);
	  GLO_MAP.markers.push(gpt);


	  google.maps.event.addListener(gpt, 'position_changed', function(){
	  	Points.update(gpt.meteor_id, {$set: {lat: gpt.getPosition().$a, lng: gpt.getPosition().ab}});
	  });
	  google.maps.event.addListener(gpt, 'mousedown', function(){
	  	Session.set("selectedPoint",gpt.meteor_id);
	  });

	
	google.maps.event.addListener(gpt, 'dragend', function(){
	  	gpt.dragging = false;
	  	displayPoints();
	  	//Points.update(gpt.meteor_id, {$set: {lat: gpt.getPosition().$a, lng: gpt.getPosition().ab}});
	  });
	google.maps.event.addListener(gpt, 'dragstart', function(){
		GLO_POINT_HANDLE.stop();
	  	gpt.dragging = true;
	  });

	  return gpt;
}

function removePoint(point){
	GLO_MAP.markers.forEach(function(mrk){
				if(mrk.meteor_id == pt._id){
					mrk.setMap();
					return;
				}
			});
}



function displayLines (){

	var handle = Lines.find({idMap:Session.get("selectedMap")}).observe({
		added : function(lin,id){
			displayLine(lin, true);
		},
		removed:function(lin,id){
			removeLine(lin);
		},
		changed:function(lin,id){
			GLO_MAP.lines.forEach(function(pline){
				if(pline.meteor_id == lin._id){
					var path = [];
					for (var i=0, latlng; latlng=lin.path[i]; i++){
          				path.push(new google.maps.LatLng(latlng[0], latlng[1]));
        			}
					pline.setPath(path);
					return;
				}
			});
		},
	})


}



function displayLine (line, editable) {

    var path = [];
    var points = line.path;

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
      path: path,
      strokeColor: line.strokeColor,
      strokeOpacity: line.strokeOpacity,
      strokeWeight: line.strokeWeight,
      editable: editable,
      visible: true
    };

    var gline = new google.maps.Polyline(polyline_options);

    	  gline.set("meteor_id",line._id);
    	  gline.setMap(GLO_MAP);
	  GLO_MAP.lines.push(gline);

	
	google.maps.event.addListener(gline, 'mouseup', function(){
		l(gline.getPath().getArray().map(function(linar){return [linar.$a,linar.ab]}));
	  	Lines.update(gline.meteor_id, {$set: {path: gline.getPath().getArray().map(function(linar){return [linar.$a,linar.ab]})}});
	  });

	  return gline;
};

function removeLine(line){
	GLO_MAP.lines.forEach(function(plin){
				if(plin.meteor_id == line._id){
					plin.setMap();
					return;
				}
			});
}


