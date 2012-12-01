
  Meteor.startup(function () {
    if (Maps.find().count() <= 1) {
      Maps.insert(map('Ma première carte', 'Cette carte est vide, remplissons-là vite !', null, [], null, null, null, null, null, null, null, 13, 48.86039473595898, 2.338371401855511));
    }
    if (Filters.find().count() === 0) {
      Filters.insert({name: "devFilter"});
    }

    if (!Meteor.users.find().count()) {
	    Accounts.createUser({
	    	'username': 'ggregoire',
	    	'email': 'ggregoire@lucca.fr',
	    	'password': 'azerty',
	    	'profile': {
	    		'name': 'Guillaume Grégoire',
	    		'img': 'img/guillaume.jpeg'
	    	}
	    });

	    Accounts.createUser({
	    	'username': 'xcampenon',
	    	'email': 'xcampenon@lucca.fr',
	    	'password': 'azerty',
	    	'profile': {
	    		'name': 'Xavier Campenon',
	    		'img': 'img/xavier.png'
	    	}
	    });

	    Accounts.createUser({
	    	'username': 'rvergnory',
	    	'email': 'rvergnory@lucca.fr',
	    	'password': 'azerty',
	    	'profile': {
	    		'name': 'Romain Vergnory',
	    		'img': 'img/romain.jpeg'
	    	}
	    });
	}

  });
