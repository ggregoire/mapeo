Meteor.startup(function () {
	Meteor.autorun( function(handle) {
	    if (!Maps.findOne()) {
	    	return;
	    }
	    handle.stop();
	    Session.set("selectedMap", Maps.findOne()._id);
	    allowRendering();
	    displayPoints();
	});
});
