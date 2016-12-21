angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


  // --------------------- animation for green color .badge-notification icon---
  anime({
    targets: ['.badge-notify'],
    scale: [1.2, 1],
    delay: 1800,
    duration: 2000,
  });

  // --------------------- animation for blue  color .badge --------------------
  anime({
    targets: ['.badge'],
    rotate: {
      value: 720,
      delay: 300,
      duration: 1500,
      easing: 'easeInOutQuad'
    },
    direction: 'normal'
  });

  // --------------------- Pie Chart Configuration -----------------------------
  $scope.pieLabels = ["FB", "Twitter", "Instagram"];
  $scope.pieData = [300, 500, 100];

  // --------------------- Line Chart Configuration ----------------------------
  $scope.lineSeries = ['Active', 'Inactive'];
  $scope.lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  $scope.lineData = [
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
.controller('ChatDetailCtrl', function($scope, Chats, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('SocialCtrl', function($scope, Chats, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.items=[
    {
      img:'../img/icons/fb.svg',
      title: 'Facebook',
      description: 'You have few messages from facebook'
    },
    {
      img:'../img/icons/youtube.svg',
      title: 'Youtube',
      description: 'You have few messages from Youtube'
    },
    {
      img:'../img/icons/twitter.svg',
      title: 'Twitter',
      description: 'You have few messages from Twitter'
    },

    {
      img:'../img/icons/snapchat.svg',
      title: 'SnapChat',
      description: 'You have few messages from SnapChat'
    },
    {
      img:'../img/icons/linkedin.svg',
      title: 'LinkedIn',
      description: 'You have few messages from LinkedIn'
    },
    {
      img:'../img/icons/pinterest.svg',
      title: 'Pinterest',
      description: 'You have few messages from Pinterest'
    },
  ]
});
