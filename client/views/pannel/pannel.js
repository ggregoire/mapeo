
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