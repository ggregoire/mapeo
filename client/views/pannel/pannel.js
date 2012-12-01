Template.pannel.title = function () {
	return "ceci est le titre de ma map"
  //return Session.get("Map").title;
};

Template.pannel.description = function () {
	return "ceci est la description de ma map . Elle est très longue, et hyper intéressante"
  //return Session.get("Map").description;
};

Template.pannel.comments = function () {
	return [{"contenu":"contenu de mon premier comment"},{"contenu":"contenu du second comment"}] 
	//return Session.get("Map").comments;
};

Template.pannel.comment = function(){
	return this.contenu;
}