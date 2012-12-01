Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("selectedMap")) {
      var map = Maps.findOne();
      if (map)
        Session.set("selectedMap", map._id);
    }

  });
});
