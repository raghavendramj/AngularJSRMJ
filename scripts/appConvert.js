// Angular App on this page Included ConvertToRomanNumbers as dependency
angular.module('ConvertToRomanNumbersApp', [ 'ConvertToRomanNumbers'])
			   .controller('inputController', ['$scope', function($scope)
			   {
					$scope.name = '';
			   }]);

// Angular Custom Filter which handles the Number Conversions.
angular.module('ConvertToRomanNumbers', [])
        .filter( 'titlecase', function() {
 		     return function( num ) { 		   
 			return convertToRoman(num);
 		}
 });

var romanMatrix = [ [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'] ];
function convertToRoman(num){
			if (isNaN(num)) 
		    {
				document.getElementById("userInput").value="";
			}	
				
			if (num === 0)
				return '';

			for (var i = 0; i < romanMatrix.length; i++) {
				if (num >= romanMatrix[i][0])
					return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
			}
}