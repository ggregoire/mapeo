
Template.searchMaps.rendered = function(){

	  Meteor.autorun(function () {

	  	var curMaps = Maps.find().fetch();
		var mapsForTypeahead = [];

	$.each(curMaps, function (i, mp) {
		mapsForTypeahead.push({
			id: mp._id,
			title: mp.title
		});
	});
		$('#map-search').typeahead({
			source: mapsForTypeahead,
			tmpl: _.template('<li id="<%= id %>"><a href="#"><%= title %></a></li>')

		});	

	});
};

Template.searchMaps.events ({
	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		var newId = $(".typeahead.dropdown-menu li.active").attr("id");

		if(pmap && newId!==Session.get("selectedMap") && newId!=="map-search"){
			Session.set("selectedMap",newId);
		}
	}
});