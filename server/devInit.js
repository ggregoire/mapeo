if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Maps.find().count() === 0) {
      Maps.insert({name: "devMap"});
    }
    if (Filters.find().count() === 0) {
      Filters.insert({name: "devFilter"});
    }
  });
}