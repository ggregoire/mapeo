
Template.searchMaps.rendered = function(){

	  Meteor.autorun(function () {
		$('#map-search').typeahead({
			source: Maps.find().fetch(),
			tmpl: _.template('<li id="<%= _id %>"><a href="#"><%= title %></a></li>')

		});	

	});
};

Template.searchMaps.events ({
	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		var newId = $(".typeahead.dropdown-menu li.active").attr("id");

		if(pmap && newId!==Session.get("selectedMap")){
			Session.set("selectedMap",newId);
		}
	}
});