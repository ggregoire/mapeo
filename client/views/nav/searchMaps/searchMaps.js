Template.searchMaps.events ({

	'click #map-search': function () {
		$('#map-search').typeahead({
			source: myCurMaps(),
			tmpl: _.template('<li id="<%= _id %>"><a href="#"><%= name %></a></li>')
		});
	},

	'click .btn' : function(){
		var pmap = $("input#map-search").val();
		var newId = $(".typeahead.dropdown-menu li.active").attr("id");

		if(pmap && newId && newId!=Session.get("selectedMap") && newId!="map-search"){
			console.log("nouvelle Id" + newId);
			Session.set("selectedPoint",undefined);
			window.location.hash = '#' + newId;
			//Session.set("selectedMap",newId);
		}
	}
	
});

function myCurMaps() {
	var curMaps;
	Meteor.autorun(function(){
		if(this.userId){
			curMaps = Maps.find(
			{$or: [{visibility: true}, {group: this.userId}, {owner: this.userId}, {owner: "anonymous"}]}
			).map(function(mp){return {_id: mp._id, name: mp.title}});
		}else{
			curMaps = Maps.find({visibility: true}, {owner: "anonymous"}).map(function(mp){return {_id: mp._id, name: mp.title}});
		}
	});
	return curMaps;
}