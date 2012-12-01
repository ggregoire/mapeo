
// god : peut tout faire (gg, romain, xavier) 

isGod = function (user) {
  return user ? user.isGod : false;
}

Meteor.methods({
	setGod: function (user) {
		if (!user) {
			return false;
		}

		Meteor.users.update(user._id, { $addToSet: { isGod: true } });
		return true;
	}
});