function displayPoint (point, editable) {
	var myLatlng = new google.maps.LatLng(point.lat,point.lng);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: Session.get("Map"),
      title:"Hello World!"
  });
}