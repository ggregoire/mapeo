Template.filterSelector.events({
	'click #filterMenu a':function(event){
			Maps.update(Session.get('selectedMap'), {$set: {filter : parseInt($(event.srcElement).attr('tabindex'))}});
			//on force le refresh
			var temp = Session.get('selectedMap');
			Session.set('selectedMap', 0);
			Session.set('selectedMap', temp);
	}
});