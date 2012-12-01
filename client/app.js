Meteor.startup(function () {
	Meteor.autorun( function(handle) {
	    if (!Maps.findOne()) {
	    	return;
	    }
	    handle.stop();
	    Session.set("selectedMap", Maps.findOne()._id);
	    allowRendering();
	});
});

Meteor.startup(function () {

	$(':radio').prettyCheckable({
    	color: 'blue'
  	});

	$('#config').on('click', function () {
		$('#popup-config-map').toggle();
	});

	var $userSearch = $('#user-search');

	var users = Meteor.users.find({}).collection.docs;
	var usersForTypeahead = [];

	$.each(users, function (i, user) {
		usersForTypeahead.push({
			id: user._id,
			name: user.profile.name,
			img: user.profile.img
		});
	});

	$userSearch.typeahead({
		source: usersForTypeahead,
		tmpl: _.template('<li id="<%= id %>"><img src="<%= img %>" width="32" height="32" /><a href="#"><%= name %></a></li>')
	});

});