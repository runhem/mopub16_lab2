var app = angular.module('myApp', ['youtube-embed']); 
app.controller('videoCtrl', function($scope) 
    {

// This is a hard-coded list, normally you’d proably use
// local storage (store) and/or persistant cookies 
    $scope.videoList = [];
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

    $scope.addComment = function(comment, videoId){
        for(i in $scope.videos){
            if($scope.videos[i].id === videoId){
                $scope.videos[i].comments.push(comment);
            }
        } 
    }   
$scope.addRating = function(rating, video){
        var ratingCount = 0;
        video.rating.push(rating);
        for(j in video.rating){
            ratingCount = ratingCount + video.rating[j];
        } 
        ratingCount = ratingCount / (video.rating.length);
        video.ratingSum = Math.round(ratingCount);         
    }



    // $scope.addVideoToLibrary = function(videoId, videoTitle, videoCategory){
    //     var video = {"id": videoId, "title":videoTitle, "rating": [], "ratingSum": 0, "category": videoCategory, "comments":[]};
    //     $scope.video.push(video);
    // }

    $scope.getVideo = function(videoId){
        for (j in $scope.videos){
            if($scope.videos[j].id === videoId){
                $scope.videoRightNow = $scope.video[j];
            }
        }
    }

    // $scope.removeVideoFromLibrary = function(videoId){
    //     for(i in $scope.videos){
    //         if($scope.videos.id === videoId){
    //             $scope.video.splice(i,1);
    //         }
    //     }
    // }

 $scope.removeComment = function(index,video){
        video.comments.splice(index,1);
   }

$scope.videos=[
    {"id": 'OX4UCZHDbzk', "title": 'Locka med strumpor', "rating": [], "ratingSum": 0, "category": "strumpor", "comments": []},
    {"id": 'FFxnhnEe3CY', "title": 'How not to locka haret', "rating": [],"ratingSum": 0, "category": "fail", "comments": []},
    {"id": 's9g4krSCYVM', "title": 'Locka med plattang', "rating": [],"ratingSum": 0, "category": "perfekt", "comments": []}

];

});