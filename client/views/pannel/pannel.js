
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	},
	showMap :function(){
		return Session.get("selectedPoint")==undefined;
	},
	point : function(){
		if(!showMap){
			return Points.findOne(Session.get("selectedPoint"));
		}else{	
			return undefined;
		}
	}
});

Template.pannel.showMap = function(){
	return showMap;	
}
Template.pannel.edit = function(){
	return Session.get("editMode")=="edit";	
}
Template.pannel.description = function(){
	if (Session.get("selectedPoint")!=undefined && Points.findOne(Session.get("selectedPoint")).desc){
		return point.desc;
	}
		return map.desc;
}

Template.pannel.inPlaceDescription=function(){
	return '<textarea class="pointDesc" placeholder="Point description here">'+val+'</textarea>';
	
}

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