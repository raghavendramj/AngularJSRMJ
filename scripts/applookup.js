angular.module('fileLookUpApp', [])
    .controller('fileLookUpController', function ($scope, $http) {
        // Service Request to fetch the JSON Elements.
        $scope.insertValue = function () {
            
            //Remove the Clicked button Line
            event.currentTarget.closest("h3").remove()
            
            $("table").show();
            // Service Request to fetch the JSON Elements.
            $http.get('data/infoJSON.json')
                .success(function (response) {
                    $scope.readValues = response;
                });
        }

    });