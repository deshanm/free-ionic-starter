angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})
.controller('ChatDetailCtrl', function($scope, Chats,$stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
});
