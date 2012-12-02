Template.popupConfigMap.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	}
});

Template.popupConfigMap.events({

	'click #updateTitle > button': function () {
		Maps.update(Session.get('selectedMap'), { $set: { title: $('#updateTitle > input').val() } });
	},

	'click #updateDesc > button': function () {
		Maps.update(Session.get('selectedMap'), { $set: { desc: $('#updateDesc > input').val() } });
	},

	'click #updateVisibility': function () {
		Maps.update(Session.get('selectedMap'), { $set: { visibility: $(':checked').val() === "true" } });
	},

	'click #addUser': function () {

	}

});

Meteor.startup(function () {

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