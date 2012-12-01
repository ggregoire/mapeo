Template.nav.events({
	'click #config': function () {
		$('#popup-config-map').toggleClass('show');
		$(':radio').prettyCheckable({
	    	color: 'blue'
	  	});
	}
});