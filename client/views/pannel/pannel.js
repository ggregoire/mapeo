
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	},
	point : function(){
		return undefined
		/*
		if(showMap){
			Points.findOne(Session.get("selectedPoint")).fetch();
		}else{	
			return undefined;
		}
		*/
	}
});

Template.pannel.showMap = function(){
	return Session.get("selectedPoint")===undefined;
}
Template.pannel.pointDesc = function(){
	return "lol";
	/*if (point && point.desc){
		return point.desc;
	}else{
		return '<textarea class="pointDesc" placeholder="Point description here"></textarea>';
	}*/
}