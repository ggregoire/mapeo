
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	},
	showMap :function(){
		return Session.get("selectedPoint")==undefined;
	},
	point : function(){
		if(!showMap){
			return Points.findOne(Session.get("selectedPoint")));
		}else{	
			return undefined;
		}
	}
});

Template.pannel.showMap = function(){
	return showMap;	
}
Template.pannel.pointDesc = function(){
	var val="";
	if (point && point.desc){
		val = point.desc;
	}
	return '<textarea class="pointDesc" placeholder="Point description here">'+val+'</textarea>';
	
}