Template.searchMaps.events ({

	'click #map-search': function () {
		var curMaps = Maps.find().map(function(mp){return {_id: mp._id, name: mp.title}});

		$('#map-search').typeahead({
			source: curMaps,
			tmpl: _.template('<li id="<%= _id %>"><a href="#"><%= name %></a></li>')
		});	
	},

	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		var newId = $(".typeahead.dropdown-menu li.active").attr("id");

		if(pmap && newId && newId!=Session.get("selectedMap") && newId!="map-search"){
			console.log("nouvelle Id" + newId);

			window.location.hash = '#' + newId;
			//Session.set("selectedMap",newId);
		}
	}
	
});