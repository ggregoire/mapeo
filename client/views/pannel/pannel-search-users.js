Meteor.startup(function () {
	var $userSearch = $('#user-search');

	$userSearch.typeahead({
		source: [
			{ id: 1, name: 'Guillaume Grégoire', img: 'img/guillaume.jpeg' },
			{ id: 2, name: 'Romain Vergnory', img: 'img/romain.jpeg' },
			{ id: 3, name: 'Xavier Campenon', img: 'img/xavier.png' }
		],
		tmpl: _.template('<li id="<%= id %>"><img src="<%= img %>" width="32" height="32" /><a href="#"><%= name %></a></li>')
	});
});