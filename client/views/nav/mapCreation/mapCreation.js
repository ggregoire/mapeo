Template.mapCreation.events({
	'click .clickMe':function(){
		var opavity = $("#creationBox").css("opacity");
		$("#creationBox").css("opacity","0")
						.css('margin-top', '-200px')
						.toggle()
						.css("opacity","1").css('margin-top', 'auto');
	},
	'keypress':function(){
		if($("input.newMapTitle").val()!==""){
			$(".showMeIfNotEmpty").show();
		}else{
			$(".showMeIfNotEmpty").hide();			
		}
	},
	'click .btnCreateMap':function(){
		Session.set('selectedMap', Maps.insert(map($("input.newMapTitle").val(),
												 $("textarea.newMapDesc").val(), 
												 [], 
												 [], 
												 [],
												 [],
												 false, 
												 false, 
												 [], 
												 Meteor.userId, 
												 null, 
												 GLO_MAP.getZoom(), 
												 GLO_MAP.getBounds().getCenter().$a, 
												 GLO_MAP.getBounds().getCenter().ab)));
	$("input.newMapTitle").val("");
	$("input.newMapDesc").val("");
	$("#creationBox").hide();
	}
})