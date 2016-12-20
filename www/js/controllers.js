angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.series = ['Series A', 'Series B'];

      $scope.dddata = [
        [{
          x: 40,
          y: 10,
          r: 20
        }],
        [{
          x: 10,
          y: 40,
          r: 50
        }]
      ];

  $scope.graph = {};
  $scope.graph.data = [
    //Awake
    [16, 15, 20, 12, 16, 12, 8],
    //Asleep
    [8, 9, 4, 12, 8, 12, 14]
  ];
  $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  $scope.graph.series = ['Awake', 'Asleep'];



  $scope.xxlabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
   $scope.xxdata = [300, 500, 100];
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
