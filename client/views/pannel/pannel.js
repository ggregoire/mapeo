
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	},
	showMap :function(){
		return Session.get("selectedPoint")==undefined;
	}
});

Template.pannel.showMap = function(){
	return showMap;	
};
Template.pannel.edit = function(){
	return Session.get("editMode")=="edit";	
};
Template.pannel.hasPoint = function(){
	return Session.get("selectedPoint");
};
Template.pannel.inPlaceDescription=function(){

	var cPoint = Session.get("selectedPoint")
	if(cPoint){
		return Points.find(cPoint).fetch().desc;
	}
	return "no description yet...";

};
Template.pannel.visualisation = function(){
	return false;
}
Template.pannel.events({
	'click .pointDescValid':function(){
		var val = $(".pointDesc").val();
		Points.update(Session.get("selectedPoint"),{desc :val});
	}
})


Template.pannel.events({
	'click .iconsbtn a':function(event){
		l($(event.srcElement).attr('icon'));
			Session.set('selectedIcon', parseInt($(event.srcElement).attr('icon')));
	}
});


Template.pannel.rendered = function () {
$.each($('.iconsbtn a'), function (index, el) {
	l('hop');
	$(el).css('background-position', '-' + 22*index + 'px ' + '-' + 22*Maps.findOne(Session.get("selectedMap")).filter + 'px');
});
}
