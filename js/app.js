(function() {
	'use strict';

	var pages = [
		{
			name :'page1',
			scope : {
				title : 'Child',
				demo : 'input'
			},
			controllerFns : ['page1']
		},
		{
			name :'page2',
			scope : {
				title : 'Mother',
				demo : 'buttons'
			},
			controllerFns : ['page2']
		},
		{
			name :'page3',
			scope : {
				title : 'Father',
				demo : 'checkboxes'
			},
			controllerFns : ['page3', 'page3_2']
		},
		{
			name :'page4',
			scope : {
				title : 'Paternity',
				demo : 'sliders'
			},
			controllerFns : ['page4']
		},
		{
			name :'page5',
			scope : {
				title : 'Informant',
				demo : ''
			},
			controllerFns : ['page5']
		},
		{
			name :'page6',
			scope : {
				title : 'Verification'
			},
			controllerFns : []
		}
	];

		angular.module('BlankApp', ['ngMaterial', 'navBarDemoBasicUsage']);

		var formMod = angular.module('navBarDemoBasicUsage', ['ngMaterial', 'ui.router']);

		pages.forEach(function (pageObj) {
			formMod.controller(pageObj.name, function ($scope) {
				var _this = this, arg = arguments;
				_.extend($scope, pageObj.scope, {name : pageObj.name});

				// pass scope object to copied controllers
				pageObj.controllerFns.forEach(function (controllerFnName) {
					window[controllerFnName].apply(_this, arg);
				});
			});
		});

		formMod.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/page1');

			pages.forEach(function (pageObj) {
				$stateProvider.state({
					name : pageObj.name,
					url : '/' + pageObj.name,
					templateUrl : './views/'+pageObj.name+'.view.html',
					controller : pageObj.name
				});
			});

		})
		.config(function($mdThemingProvider) {

			// Configure a dark theme with primary foreground yellow

			$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('yellow')
			.dark();

		})
		.controller('AppCtrl', AppCtrl);

		function AppCtrl($scope) {
			$scope.currentNavItem = 'page1';
			$scope.pages = pages;
		}

})();
