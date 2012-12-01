Maps = new Meteor.Collection("maps");

Filters = new Meteor.Collection("filters");

function point (latlng, title, image) {
		if(latlng==null) {
			latlng = new google.maps.LatLng(-25.363882,131.044922);
		}
		if(title==null) {
			title = "titre test";
		}
		if(image==null) {
			image = 'glyphicons-halflings.png';
		}
		var pt = '{latlng:' + latlng + ', title:' + title + ', image:' + image + '}';
		console.log(pt);
	return pt;

}