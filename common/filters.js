function applyFilter (num) {
	var styles;
	switch(num){
	case 0:
			styles = [
			{ featureType: "water",
		    elementType: "geometry",
		    stylers: [
		      {color: "#b7e2c5"}
		    ]}			
		  ];
		break;
		case 1:
			styles = [
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
	  break;
	  case 2:
		styles = [
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
	  break;
	}	
	GLO_MAP.setOptions({styles: styles});
}