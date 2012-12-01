#README
=======

##Project structure

Meteor a des dossiers spéciaux ([source](http://andrewscala.com/meteor/)) :
* `[project_root]/client/` - Files here are only sent to the client’s browser and aren’t available or run from the server.
* `[project_root]/client/css/` - For css files.
* `[project_root]/client/lib/` - For libraries. Gmaps.js is here.
* `[project_root]/client/views/` - For templates.
* `[project_root]/common/` - Files here are sent to the client and the server (you can use Meteor.is_client and Meteor.is_server).
* `[project_root]/public/` - Meteor serves static media from this directory.
* `[project_root]/server/` - Files here are only run on the server and aren’t available on the client.

Pour avoir une idée de comment moduler l'application, regarder la structure de [Telescope](https://github.com/SachaG/Telescope).

Si c'est bien modulaire on se gênera pas en codant sur les mêmes fichiers.