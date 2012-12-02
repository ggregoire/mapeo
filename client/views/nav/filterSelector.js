Template.filterSelector.events({
	'click #filterMenu a':function(event){
			Maps.update(Session.get('selectedMap'), {$set: {filter : parseInt($(event.srcElement).attr('tabindex'))}});
			//applyFilter($(event.srcElement).attr('tabindex'));
	}
});