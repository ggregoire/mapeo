
Meteor.startup(function () {

	Meteor.users.allow({
		insert: function (userId, user) {
			return true;
		},
		
		update: function (userId, user) {
			return true;
		}
	});

	Maps.allow({
		insert: function (userId, map) {
			return true;
		},

		update: function (userId, map) {
			return true;
			/*
			return _.any(map.guest, function(guest){
			    return guest.right ==="edit" ||guest.right ==="admin"||guest.userId===map.owner;
			});
			*/
		},

		remove: function (userId, map) {
			// deny if not the owner, or if other people are going
			return map.owner !== userId ;
		}

	});

});