Template.popupConfigMap.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	}
});

Template.popupConfigMap.events({

	'click #updateTitle > :button': function () {
		Maps.update(Session.get('selectedMap'), { $set: { title: $('#updateTitle > input').val() } });		
	},

	'click #updateDesc > :button': function () {
		Maps.update(Session.get('selectedMap'), { $set: { desc: $('#updateDesc > input').val() } });
	},

	'click #updateVisibility': function () {
		Maps.update(Session.get('selectedMap'), { $set: { visibility: $(':checked').val() === "true" } });
	},

	'click #addUser > :button': function () {
		//Maps.update(Session.get('selectedMap'), { $push: { group: { id: }) } } });
	}

});