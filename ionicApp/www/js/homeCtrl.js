var module = angular.module('projectConn.controllers');

module.controller('HomeCtrl', function($scope,$http,$ionicPopup,ApiEndpoint,$httpParamSerializerJQLike){
	$scope.header = "Index Getter";
	$scope.tuples = [];
	$scope.data = {};
	var tupleID = 0;
	$http({
		method: 'GET',

		//Add url where DB ?format=jsondata is pulled from
		url: ApiEndpoint.url,	//This points to our api page to proxy through to the backend
	}).then(function successCallback(response) {
				$scope.tuples =[]	//Declare vector of tuples
				for (var r in response.data) {	
					var tuple = response.data[r];	//Push tuples taken from response data
					$scope.tuples.push(tuple);
				}
				tupleID = tuple.id;
				console.log($scope.tuples);
			}, function errorCallback(response) {
				console.log("ERROR");
			});
	
	$scope.GetDetails = function(tuple) {		//Declared function GetDetails

			var url = ApiEndpoint.url + '/' + tuple.id +'.json'; 	//Only goes to certain tuples in the database corresponding to index given
			$http.get(url).then(function successCallback(response){
					var alertPopup = $ionicPopup.alert({
						title: 'Corresponding Number',		//show alertPopup with Corresponding Number
						template: 'Number =' + response.data.number,
					});
			}, function errorCallback(response){
				console.log("ERROR");
			});
	}
	
	$scope.SendNumber = function() {
		var newNo = $scope.data.newNumber;
		$http({
			url: ApiEndpoint.url + '/post/',
			method: 'POST',
			data:  {tupleID, newNo},

			//$httpParamSerializerJQLike(newNo),
			//headers: {
        	//	'Content-Type': 'application/x-www-form-urlencoded'
    		//},
		}).then(function successCallback(response) {
			//console.log(newNumber.toString())
			$scope.data.newNumber = ''
			window.location.reload();
		}, function errorCallback(response) {
			console.log("ERROR")
		});
	}
})