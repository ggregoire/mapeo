
// god : peut tout faire (gg, romain, xavier) 

isGod = function (user) {
  return user ? user.isGod : false;
}

setGod = function (user) {
	if (!user) {
		return false;
	}
	
	user.isGod = true;
	return true;
}