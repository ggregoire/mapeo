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
	}
})