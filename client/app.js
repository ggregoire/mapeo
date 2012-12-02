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
			window.location.hash = '#' + Session.get('selectedMap');
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
	Meteor.autorun(function(){		
		var txt = Session.get("textureUrl");
		$(".filterTexture").css("background-image",txt);
		console.log("j'ai changé la texture");
	})
	/*
	if(!GLO_FILTER_DETAILS){
		return "";
	}
	return GLO_FILTER_DETAILS.imgUrl;
	*/
}
