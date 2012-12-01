
Accounts.onCreateUser(function (user) {

	// if this is the first user ever, make them a God
	if (!Meteor.users.find().count()) {
		setGod(user);
	}

	return user;
});