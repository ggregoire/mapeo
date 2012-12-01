
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	}
});