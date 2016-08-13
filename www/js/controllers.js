angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  window.ga.trackView('Dash view')
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  window.ga.trackView('Chat view')

})
.controller('ChatDetailCtrl', function($scope, Chats,$stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
  window.ga.trackView('Chat Details view');
});
