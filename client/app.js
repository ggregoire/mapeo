Meteor.startup(function () {
	Meteor.autorun( function(handle) {
		l(Maps.findOne());
    if (!Maps.findOne()) {
    	return;
    }
    l('autorun stop');
    handle.stop();
    Session.set("selectedMap", Maps.findOne()._id);
    reinitiateMap();
});
});
