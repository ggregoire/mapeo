
Template.searchMaps.rendered = function(){

	  Meteor.autorun(function (handle) {

	  	var curMaps = Maps.find().map(function(mp){return {_id: mp._id, title: mp.title}});
	  	if(curMaps.length==0){
	  		return;
	  	}
	    handle.stop();

	    console.log(curMaps);

		$('#map-search').typeahead({
			source: curMaps,
			tmpl: _.template('<li id="<%= _id %>"><a href="#"><%= title %></a></li>')
		});	
	});
};

Template.searchMaps.events ({
	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		var newId = $(".typeahead.dropdown-menu li.active").attr("id");

		if(pmap && newId && newId!=Session.get("selectedMap") && newId!="map-search"){
			Session.set("selectedMap",newId);
		}
	}
});