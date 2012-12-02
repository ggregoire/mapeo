var GLO_FILTER_DETAILS;

function applyFilter (num) {
	var styles;
	switch(num){
	case 0:
		styles = filter0();
		GLO_FILTER_DETAILS = {"imgUrl":"/img/papier2.jpg"}
	break;
	case 1:
		styles = filter1();
		GLO_FILTER_DETAILS = {"imgUrl":"/img/papier.jpg"}
	break;
	  case 2:
		styles = filter2(); 
		GLO_FILTER_DETAILS = {"imgUrl":"/img/papier.jpg"}
	 break;
	 case 3 :
		styles = filter3();
	 	GLO_FILTER_DETAILS = {"imgUrl":"/img/papier2.jpg"}
	 break;
	}	
	GLO_MAP.setOptions({styles: styles});
}

function filter1(){
			return [
			{ featureType: "water",
		    elementType: "geometry",
		    stylers: [
		      {color: "#b7e2c5"}
		    ]}
			,{ featureType: "water",
		    elementType: "labels.text.fill",
		    stylers: [
		      {color: "#666666"}
		    ]}
			,{ featureType: "water",
		    elementType: "labels.text.stroke",
		    stylers: [
		      {color: "#b7e2c5"}
		    ]}
			,{ featureType: "landscape.man_made",
		    elementType: "all",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "landscape",
		    elementType: "geometry",
		    stylers: [
		      {color :"#e5d887"}
		    ]}
			,{ featureType: "road",
		    elementType: "labels",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "administrative",
		    elementType: "labels",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "administrative",
		    elementType: "geometry.stroke",
		    stylers: [
		      {color: "#b7b7ed"},
			  {weight: "0.3"},
		    ]}
			,{ featureType: "administrative.country",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#777777"}
		    ]}
			,{ featureType: "administrative.locality",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#777777"}
		    ]}
			,{ featureType: "administrative.province",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#333333"}
		    ]}
			,{ featureType: "administrative.province",
		    elementType: "labels.text.stroke",
		    stylers: [
		      {visibility: "on"},
			  {color: "#e5d887"},
			  {weight: "5"}
		    ]}
			,{ featureType: "administrative.neighborhood",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#333333"}
		    ]}
			,{ featureType: "administrative.neighborhood",
		    elementType: "labels.text.stroke",
		    stylers: [
		      {visibility: "on"},
			  {color: "#e5d887"},
			  {weight: "5"}
		    ]}
			,{ featureType: "poi",
		    elementType: "all",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "transit",
		    elementType: "all",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "road",
		    elementType: "all",
		    stylers: [
		      {color: "#1a1a1a"},
			  {weight: "0.4"},
			  {gamma: "2"}
		    ]}
			,
		  ];
}
function filter0(){
	return [
			{ featureType: "water",
		    elementType: "geometry",
		    stylers: [
		      {color: "#7bbcc8"}
		    ]}
			,{ featureType: "road",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e5e6e2"}
		    ]}
			,{ featureType: "all",
		    elementType: "labels",
		    stylers: [
		      {visibility: "simplified"}
		    ]}
			,{ featureType: "poi.attraction",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#000000"}
		    ]}
			,{ featureType: "poi.attraction",
		    elementType: "labels.text.stroke",
		    stylers: [
		      {visibility: "on"},
			  {color: "#e5e700"},
				{weight:"5"}
		    ]}
			,{ featureType: "transit",
		    elementType: "labels.text.fill",
		    stylers: [
		      {visibility: "on"},
			  {color: "#ffffff"},
				{weight:"4"}
		    ]}
			,{ featureType: "transit",
		    elementType: "labels.text.stroke",
		    stylers: [
		      {visibility: "on"},
			  {color: "#096685"},
			  {weight: "5"}
		    ]}
			,{ featureType: "road.highway",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e7ef38"}
		    ]}
			,{ featureType: "landscape",
		    elementType: "geometry",
		    stylers: [
		      {color: "#c7c8c1"}
		    ]}
			,{ featureType: "administrative",
		    elementType: "geometry",
		    stylers: [
		      {color: "#bda5c5"},
			  {weight: "3"}
		    ]}
			,{ featureType: "landscape.man_made",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e4aad0"}
		    ]}
			,{ featureType: "poi",
		    elementType: "geometry",
		    stylers: [
		      {color: "#d6dab5"}
		    ]}
			,{ featureType: "poi.medical",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e44a42"}
		    ]}
			,{ featureType: "poi.government",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e44a42"}
		    ]}
			,{ featureType: "poi.place_of_worship",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e5e700"}
		    ]}
			,{ featureType: "poi.attraction",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e5e700"}
		    ]}
			,{ featureType: "poi.park",
		    elementType: "geometry",
		    stylers: [
		      {color: "#76bb46"}
		    ]}
			
		  ];
}
function filter2(){
	return [
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
}
function filter3(){
	return [
			{ featureType: "water",
		    elementType: "geometry",
		    stylers: [
		      {color: "#e2e9e9"},
			  {weight: "2"}
		    ]}
			,{ featureType: "all",
		    elementType: "labels",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "road.arterial",
		    elementType: "labels.text",
		    stylers: [
		      {visibility: "on"},
			  {color : "51793b"}
		    ]}
			,{ featureType: "landscape.man_made",
		    elementType: "geometry",
		    stylers: [
		      {color: "#fdeed3"}
		    ]}
			,{ featureType: "administrative",
		    elementType: "geometry",
		    stylers: [
		      {color: "#fdeed3"}
		    ]}
			,{ featureType: "poi",
		    elementType: "geometry",
		    stylers: [
		      {color: "#fdeed3"}
		    ]}
			,{ featureType: "road",
		    elementType: "geometry",
		    stylers: [
		      {color: "#51793b"},
			  {weight: "0.6"}
		    ]}
			,{ featureType: "road.local",
		    elementType: "all",
		    stylers: [
		      {visibility: "off"}
		    ]}
			,{ featureType: "transit",
		    elementType: "geometry",
		    stylers: [
		      {color: "#ea1a12"},
			  {weight: "0,6"}
		    ]}
		  ];
}