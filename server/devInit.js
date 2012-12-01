if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Maps.find().count() <= 1) {
      Maps.insert({name: "ouf devMap1", points: []});
      Maps.insert({name: "malade devMap2", points: []});
      Maps.insert({name: "débile devMap3", points: []});
    }
    if (Filters.find().count() === 0) {
      Filters.insert({name: "devFilter"});
    }
  });
}