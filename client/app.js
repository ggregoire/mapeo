Meteor.startup(function () {
	Meteor.autorun( function(handle) {
	    if (!Maps.findOne()) {
	    	return;
	    }
	    handle.stop();
	    Session.set("selectedMap", Maps.findOne()._id);
	    allowRendering();
	    displayPoints();
	    applyMapFilter();
	    displayLines();
	});
});

Meteor.startup(function () {

	var loadMap = function (id) {
		if (Maps.findOne(id)) {
			Session.set('selectedMap', id);
		}
	};

	if (window.location.hash) {
		loadMap(window.location.hash.replace(/#/, ''));
	} else {
		Meteor.autorun(function (handle) {
			if (!Maps.findOne()) {
		    	return;
		    }
		    handle.stop();
			window.location.hash = '#' + Session.get('selectedMap');
		});
	}

	$(window).bind('hashchange', function () {
		loadMap(window.location.hash.replace(/#/, ''));
	});

});


Template.filter.rendered = function(){
	/*
	if(!GLO_FILTER_DETAILS){
		return "";
	}
	return GLO_FILTER_DETAILS.imgUrl;
	*/
}
