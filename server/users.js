
Accounts.onCreateUser(function (options, user) {
	user.profile = options.profile || {};

	if (options.email) {
    	user.profile.email = options.email;
    }

    if (!user.profile.name) {
    	user.profile.name = user.username;
    }

	// if this is the first user ever, make them a God
	if (!Meteor.users.find().count()) {
		//setGod(user);
	}

	return user;
});