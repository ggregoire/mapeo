Meteor.startup(function () {
	var $userSearch = $('#user-search');

	var users = Meteor.users.find().fetch();

	l(users);

	$userSearch.typeahead({
		source: users,
		tmpl: _.template('<li id="<%= _id %>"><img src="<%= profile.photo %>" width="32" height="32" /><a href="#"><%= profile.name %></a></li>')
	});
	
});