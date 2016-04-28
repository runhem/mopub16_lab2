var app = angular.module('myApp', ['youtube-embed']); 
app.controller('videoCtrl', function($scope) 
    {

    $scope.getLocalStorage = function(){
        $scope.videos=JSON.parse(localStorage.getItem("videos"));
    }
    

    $scope.saveLocalStorage = function(){
            localStorage.removeItem("videos");
            localStorage.setItem("videos", JSON.stringify($scope.videos));
    }

// This is a hard-coded list, normally you’d proably use
// local storage (store) and/or persistant cookies 

    $scope.removeVideo = function(index,video){
        $scope.videos.splice(index,1);
    }

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



    $scope.addVideoToLibrary = function(){
        var video = {"id": $scope.videoId, "title":$scope.videoTitle, "rating": [], "ratingSum": 0, "category": $scope.videoCategory, "comments":[],done:false};
        $scope.videos.push(video);
        $scope.saveLocalStorage();
        }

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
    // {"id": 'OX4UCZHDbzk', "title": 'Locka med strumpor', "rating": [], "ratingSum": 0, "category": "socks", "comments": [], done: false},
    // {"id": 'FFxnhnEe3CY', "title": 'How not to locka haret', "rating": [],"ratingSum": 0, "category": "fail", "comments": [], done:false},
    // {"id": 's9g4krSCYVM', "title": 'Locka med plattang', "rating": [],"ratingSum": 0, "category": "nice", "comments": [], done:false}

];

});