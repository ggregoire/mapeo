Meteor.startup(function () {

	GLO_MAP = initiateMap();

	//TODO gérer les droits
  	initiateDrawing();

  	Meteor.subscribe('users');

});