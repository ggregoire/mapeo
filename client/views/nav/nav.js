Template.nav.events({
	'click #config': function () {
		$('#popup-config-map').toggleClass('show');
		$('#overlay').css('opacity', 1).toggle();

		$(':radio').prettyCheckable({
	    	color: 'blue'
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
	}
});