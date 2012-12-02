Maps = new Meteor.Collection("maps");

Filters = new Meteor.Collection("filters");

Points = new Meteor.Collection("points");

Lines = new Meteor.Collection("lines");

function point (lat, lng, title, image, isEditable) {
		if(!Session.get("selectedMap")){
			console.log("echec");
			return "";
		}
		if(lat==null) {
			lat = -25.363882; 
		}
		if(lng==null) {
			lng = 131.044922;
		}
		if(title==null) {
			title = "titre test";
		}
		if(image==null) {
			image = 1;
		}
		var pt = {lat: lat, lng: lng, title:title, idMap:Session.get("selectedMap"), isEditable:isEditable , image: image};
		console.log(pt);
	return pt;
}

function line (path, strokeColor, strokeOpacity, strokeWeight, isEditable) {
		if(!Session.get("selectedMap")){
			console.log("echec");
			return "";
		}
		if(path==null) {
			path = [[-25.363882,131.044922],[48.86039473595898, 2.338371401855511]]; 
		}
		if(strokeColor==null) {
			strokeColor = "#000000";
		}
		if(strokeOpacity==null) {
			strokeOpacity = 1;
		}
		if(strokeWeight==null) {
			strokeWeight = 3;
		}
		var lin = {path: path, strokeColor: strokeColor,strokeOpacity: strokeOpacity,strokeWeight: strokeWeight, isEditable: isEditable ,idMap:Session.get("selectedMap"),};
		console.log(lin);
	return lin;
}

function map (title, desc, points, lines, polygons, rectangles, visibility, edit, group, owner, filter, zoom, centerLat, centerLng) {
		if(title==null) {
			title = "titre test";
		}
		if(desc==null) {
			desc = "desc test";
		}
		if(points==null) {
			points = [];
		}
		if(lines==null) {
			lines = [];
		}
		if(polygons==null) {
			polygons = [];
		}
		if(rectangles==null) {
			rectangles = [];
		}
		if(visibility==null) {
			visibility = true;
		}
		if(edit==null) {
			edit = true;
		}
		if(group==null) {
			group = [];
		}
		if(owner==null) {
			owner = 0;
		}
		if(filter==null) {
			filter = 0;
		}
		if(zoom==null) {
			zoom = 4;
		}
		if(centerLat==null) {
			centerLat = -25.363882; 
		}
		if(centerLng==null) {
			centerLng = 131.044922;
		}
		var mp = {title:title,desc:desc,points:points,lines:lines,polygons:polygons, rectangles:rectangles, visibility:visibility, edit:edit, group:group, owner:owner, filter:filter, zoom:zoom, centerLat:centerLat, centerLng:centerLng};
		console.log(mp);
	return mp;
}
