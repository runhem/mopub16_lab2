var app = angular.module('myApp', ['youtube-embed']); 
app.controller('videoCtrl', function($scope) 
    {

// This is a hard-coded list, normally you’d proably use
// local storage (store) and/or persistant cookies 
    $scope.videoList = [{videoText:'Rika Usama', done:false}, {videoText:'Jesse Enkamp', done:false}];
    $scope.addVideo = function() 
        {
        $scope.videoList.push({videoText:$scope.videoInput, done:false});
        $scope.videoInput = ""; //empty the input
        };

    $scope.removeVideo = function() 
        {
        var oldList = $scope.videoList;
        $scope.videoList = [];
        angular.forEach(oldList, function(x) 
            {
            if (!x.done) $scope.videoList.push(x);
            });
        };
 
 $scope.theBestVideo = 'IsdCGQbbd8k';



});