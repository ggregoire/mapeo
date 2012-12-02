Template.chat.msg = function () {
	return Msg.find({map: Session.get('selectedMap')});
}

Template.chat.events({

	'click .btn': function () {
		Msg.insert({map: Session.get('selectedMap'), img: '/' + Meteor.user().profile.img, txt: $('#chat .span2').val()});
	},

	'click i': function () {
		$('#chat ul').toggle();

		if ($('#chat i').hasClass('icon-resize-small')) {
			$('#chat i').removeClass().addClass('icon-resize-full');
		} else {
			$('#chat i').removeClass().addClass('icon-resize-small');
		}
	}

});