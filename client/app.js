Meteor.startup(function () {
	Meteor.autorun( function() {
    if (! Session.get("selectedMap")) {
      var map = Maps.findOne();
      console.log("il n'y a pas de selectedMap");
      if (map){
            Session.set("selectedMap", map._id);
          	console.log("la carte");
          	console.log(map);
          	console.log("donne le selectedMap");
          	console.log(Session.get("selectedMap"));
          } else {
          	console.log("pas de carte");
          }
    } else {
    	console.log("il y a déjà un selectedMap");
    }
});
});
