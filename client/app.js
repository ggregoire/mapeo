
Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("selected")) {
      var map = Maps.findOne();
      if (map)
        Session.set("selected", map._id);
    }

	var $userSearch = $('#user-search');

	$userSearch.typeahead({
		source: [
			{ id: 1, name: 'Guillaume Grégoire', img: 'https://secure.gravatar.com/avatar/1e3d810c3d6d82c2df1685da81888543?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png' },
			{ id: 2, name: 'Romain Vergnory', img: 'https://secure.gravatar.com/avatar/13f593a227714311faea393efd0ba5f7?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png' },
			{ id: 3, name: 'Xavier Campenon', img: 'https://secure.gravatar.com/avatar/40e44b9cbe3bad8210f88be1e67caaae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png' }
		],
		tmpl: _.template('<li id="<%= id %>"><img src="<%= img %>" width="32" height="32" /><a href="#"><%= name %></a></li>')
	});

	GLO_MAP = initiateMap();

	//TODO gérer les droits
  	initiateDrawing();

  	Meteor.autosubscribe(function () {
  		Meteor.subscribe("Map", {room: Session.get("current-room")});
	});

  	//TODO gérer les maps création etc
  	Session.set("MapID", 0);
  	Maps.insert({id: 0, name: "test"});


  });
});
