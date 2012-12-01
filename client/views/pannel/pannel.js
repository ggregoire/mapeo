
Template.pannel.helpers({
	map: function () {
		return Maps.findOne(Session.get('selectedMap'));
	}
});

Template.pannel.title = function () {
	return this.title;
};

Template.pannel.description = function () {
	return this.desc;
};

Template.pannel.comments = function () {
	return [{"contenu":"contenu de mon premier comment"},{"contenu":"contenu du second comment"}] 
	//return Session.get("Map").comments;
};

Template.pannel.comment = function(){
	return this.contenu;
}