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

Session.set('chat', [ {img: '/img/guillaume.jpeg', txt: 'salut!'}, {img: '/img/romain.jpeg', txt: 'yo'} ]);


Template.filter.rendered = function(){
	Meteor.autorun(function(){		
		var txt = Session.get("textureUrl");
		$(".filterTexture").css("background-image","url("+txt+")")
							.css("opacity",Session.get("textureOpacity"));
		console.log("j'ai changé la texture : " + txt);
	});
};
