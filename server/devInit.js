if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Maps.find().count() <= 1) {
      Maps.insert({name: "ouf devMap1"});
      Maps.insert({name: "malade devMap2"});
      Maps.insert({name: "débile devMap3"});
    }
    if (Filters.find().count() === 0) {
      Filters.insert({name: "devFilter"});
    }
  });
}