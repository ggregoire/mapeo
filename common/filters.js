function applyFilter () {
	
	var styles = [
	{ featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {color: "#c2b4a1"}
    ]}
	,{ featureType: "administrative",
    elementType: "all",
    stylers: [
      {visibility: "off"}
    ]}
	,{ featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {visibility: "off"}
    ]}
	,{ featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {visibility: "on"}
    ]}
	,{ featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {color: "#83beca"}
    ]}
	,{ featureType: "roads",
    elementType: "labels.text",
    stylers: [
      {visibility: "off"}
    ]}
	,{ featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {color: "#e8452a"}
    ]}
	,{ featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {color: "#528468"},
	]}
	,{ featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {visibility: "on"},
	]}
	,{ featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {visibility: "on"},
	]}
	,{ featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {visibility: "off"},
	]}
	,{ featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {color: "#ecded1"},
	]}
  ];

	GLO_MAP.setOptions({styles: styles});
}