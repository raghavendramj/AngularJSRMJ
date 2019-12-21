angular.module('statusUpdateApp', [])
    .controller('statusUpdateController', function ($scope, $compile) {
        $scope.insertValue = function () {
            var status = $("#userInput")[0].value;
            $scope.deviation = status.length;
            if (status.length > 0) {
                var deleteButton = $('<button></button>').attr("ng-click", "deleteCell()")
                    .attr("class", "btn btn-danger btn-sm")
                    .html("Delete");
                //The variable element then contains an angular.element (or jQuery if you are using it) that you can insert anywhere in the DOM
                var element = $compile(angular.element(deleteButton))($scope);
                var spanTag = $('<h3>').attr("value", status).html(status + " ");
                spanTag.append(element);
                $("#statusDiv").append(spanTag);
                $("#userInput")[0].value = ""
            }
        }

        $scope.deleteCell = function () {
            //To Remove the Alert for non empty value.
            $scope.deviation = 1;
            var clickedButton = event.currentTarget;
            var clickedStatusSpan = clickedButton.closest('h3');
            clickedStatusSpan.remove();
        }
    });