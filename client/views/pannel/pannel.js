
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
		return Points.findOne(cPoint).desc;
	}
	return "no description yet...";

};
Template.pannel.visualisation = function(){
	return Points.findOne(Session.get("selectedPoint")).desc ;
}
Template.pannel.events({
	'click .pointDescValid':function(){
		var val = $(".pointDesc").val();
		Points.update(Session.get("selectedPoint"),{$set:{desc:val}});
		Session.set("isEditingDescription",false);
	},
	'click .isDescribing':function(){
		Session.set("isEditingDescription",true);
		console.log("lol");
	}
})


Template.pannel.events({
	'click .iconsbtn a':function(event){
		l($(event.srcElement).attr('icon'));
		Session.set('selectedIcon', parseInt($(event.srcElement).attr('icon')));
		GLO_MAP.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.MARKER);
	}
});


Template.pannel.rendered = function () {
$.each($('.iconsbtn a'), function (index, el) {
	l('hop');
	$(el).css('background-position', (-32)*index + 'px ' + (-32)*Maps.findOne(Session.get("selectedMap")).filter + 'px');

});
}
