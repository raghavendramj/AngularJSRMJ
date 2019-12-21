        var app = angular.module('menuApplication', []);


        app.directive('ngMenu', function ($parse) {
            var direc = {};
            var linkFunction = function (scope, element, attributes) {
                /* Evaluates attribute before assigning it into a model */
                scope.menus = scope.$eval(attributes.ngMenu);

                element.bind('click', function () {
                    element.css('background-color', 'white');
                    scope.$apply(function () {
                        scope.color = "yellow";
                    });
                });
                element.bind('mouseover', function () {
                    element.css('cursor', 'pointer');

                });

            };
            direc.restrict = 'A';
            direc.link = linkFunction;
            direc.template = '<ul><h3  ng-repeat="menu in menus"><li style="background-color:{{color}}">{{menu}}</li></h3></ul>';
            return direc;
        });