/*
  use webpack : webpack app.js appDist.js
  ** : DO NOT USE --optimize-minimize
*/
const AppController = require('./controllers/AppController.js');

angular.module('AngularMaterialApp', ['ngRoute', 'ngMaterial' /*, Users.name*/ ])
    .config(function($mdIconProvider, $mdThemingProvider, $routeProvider) {
        // Register the user `avatar` icons
        $mdIconProvider
        //.defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
        $routeProvider
            .when("/", {
                template: "<h1>Main</h1>"
            })
            .when("/hello", {
                template: "<h1>Hello</h1>"
            })
            .when("/about", {
                template: "<h1>About</h1>"
            });
    })
    .controller('AppController', AppController);
