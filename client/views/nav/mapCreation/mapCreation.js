Template.mapCreation.events({
	'click .clickMe':function(){
		var opavity = $("#creationBox").css("opacity");
		$("#creationBox").css("opacity","0")
						.toggle()
						.css("opacity","1");
						$('#pannel').toggle();
						$('#chat').toggle();
	},
	'keypress':function(){
		if($("input.newMapTitle").val()!==""){
			$(".showMeIfNotEmpty").show();
		}else{
			$(".showMeIfNotEmpty").hide();			
		}
	},
	'click .btnCreateMap':function(){
		$('#pannel').show();
		$('#chat').show();
		Session.set('selectedMap', Maps.insert(map($("input.newMapTitle").val(),
												 $("textarea.newMapDesc").val(), 
												 [], 
												 [], 
												 [],
												 [],
												 false, 
												 false, 
												 [], 
												 Meteor.userId(),
												 null, 
												 GLO_MAP.getZoom(), 
												 GLO_MAP.getBounds().getCenter().$a, 
												 GLO_MAP.getBounds().getCenter().ab)));
	$("input.newMapTitle").val("");
	$("input.newMapDesc").val("");
	$("#creationBox").hide();
	}
})