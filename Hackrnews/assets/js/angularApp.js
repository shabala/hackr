var app = angular.module('flapperNews', ['ui.router'])


app.factory('posts', [function(){
  // service body
   var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
  'posts',
function($scope, posts){
  //$scope.test = 'Hello world!';
  $scope.posts = posts.posts;
  
  $scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: [
      {author: 'Rhaegar Targaryen', body: 'Targaryens rule!', upvotes: 0},
      {author: 'Ned Stark', body: 'Winter is coming!', upvotes: 0}
    ]
  });
    
    //inserting comment into db-posts collection
    
//    db.comments.save({title: $scope.title, link: $scope.link, upvotes: $scope.upvotes}, function(err, saved) {
 // if( err || !saved ) console.log("error");
  //else console.log("success");
//}); 
    
    /*-----------------*/
  $scope.title = '';
  $scope.link = '';
};
  
  $scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
}]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
$scope.post = posts.posts[$stateParams.id];
  
  $scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: $scope.author,
    upvotes: 0
  });
    
    //inserting comment into db-posts collection
    
//    db.comments.save({body: $scope.body, author: $scope.author, upvotes: $scope.upvotes}, function(err, saved) {
//  if( err || !saved ) console.log("error");
//  else console.log("success");
//}); 
    /*------------*/
    
  $scope.body = '';
  $scope.author = '';
}
  
  $scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
}
]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
  
 $stateProvider
  .state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});
  

  $urlRouterProvider.otherwise('home');
}

]);