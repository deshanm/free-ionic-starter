angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
  ];
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})
.controller('ChatDetailCtrl', function($scope, Chats,$stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('SocialCtrl', function($scope, Chats,$stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
});
