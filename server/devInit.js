if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Maps.find().count() <= 1) {
      Maps.insert(map('title', 'desc', null, null, null, null, null, null, null, null));
    }
    if (Filters.find().count() === 0) {
      Filters.insert({name: "devFilter"});
    }
  });
}