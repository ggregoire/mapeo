Maps = new Meteor.Collection("maps");

Filters = new Meteor.Collection("filters");

function point (lat, lng, title, image) {
		if(lat==null) {
			lat = -25.363882; 
		}
		if(lng==null) {
			lng = 131.044922;
		}
		if(title==null) {
			title = "titre test";
		}
		/*if(image==null) {
			image = 'glyphicons-halflings.png';
		}*/
		var pt = {lat: lat, lng: lng, title:title};// , image: image};
		console.log(pt);
	return pt;
}

function map (title, desc, points, lines, polygons, rectangles, visibility, edit, group, owner, filter, zoom, centerLat, centerLng) {
		if(title==null) {
			title = "titre test";
		}
		if(desc==null) {
			desc = "desc test";
		}
		if(points==null) {
			points = [point(null,null,null,null)];
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
