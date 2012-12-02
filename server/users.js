
Accounts.onCreateUser(function (options, user) {
	user.profile = {};

	user.profile.img = 'img/bob.jpg';

	return user;
});
