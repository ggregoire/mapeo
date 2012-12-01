Template.mapCreation.events({
	'click .clickMe':function(){
		var opavity = $("#creationBox").css("opacity");
		$("#creationBox").css("opacity","0")
						.toggle()
						.css("opacity","1");
	},
	'keypress':function(){
		if($("input.newMapTitle").val()!==""){
			$(".showMeIfNotEmpty").show();
		}else{
			$(".showMeIfNotEmpty").hide();			
		}
	},
	'click .btnCreateMap':function(){
		Session.set('selectedMap', Maps.insert(map($("input.newMapTitle").val(), null, [], [], [], [], false, false, [], Meteor.userId, null, GLO_MAP.getZoom(), GLO_MAP.getBounds().getCenter().$a, GLO_MAP.getBounds().getCenter().ab)));
	$("input.newMapTitle").val("");
	$("#creationBox").hide();
	}
})