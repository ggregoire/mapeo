Template.chat.msg = function () {
	return Msg.find({map: Session.get('selectedMap')});
}

Template.chat.events({

	'click .btn': function () {
		Msg.insert({map: Session.get('selectedMap'), img: '/' + Meteor.user().profile.img, txt: $('#chat .span2').val()});
	}

});