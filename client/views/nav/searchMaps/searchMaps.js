
Template.searchMaps.rendered = function(){

	  Meteor.autorun(function () {
		$('#map-search').typeahead({
			source: Maps.find().fetch(),
			tmpl: _.template('<li id="<%= _id %>"><a href="#"><%= name %></a></li>')

		});	

	});
};

Template.searchMaps.events = 
{
	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		a(pmap);
	}
}