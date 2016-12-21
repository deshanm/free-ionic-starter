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

  $scope.items=[
    {
      img:'../img/icons/fb.svg',
      title: 'Facebook',
      count: 56,
      color: '#375a95',
      description: '<b>Donald Trump</b> has liked your status <i class="italic thin">"F*ck me I am Famous"</i> <span class="small"><b>13</b> min ago<span>'
    },
    {
      img:'../img/icons/youtube.svg',
      title: 'Youtube',
      count: 10,
      color: '#e52215',
      description: '<b>Jay Garic</b> has commented on your proile <i class="italic thin">"How should I <b>buy</b> your app"</i>'
    },
    {
      img:'../img/icons/twitter.svg',
      title: 'Twitter',
      count: 78,
      color: '#2196f3',
      description: '<b>NodeSphere and 6 others</b> liked your Retweet <span class="small thin"> Nov <b>9</b></span>'
    },

    {
      img:'../img/icons/snapchat.svg',
      title: 'SnapChat',
      count: 2,
      color: '#b2af16',
      description: 'You have few messages from <b>SnapChat<b> 12 min ago'
    },
    {
      img:'../img/icons/linkedin.svg',
      title: 'LinkedIn',
      count: 65,
      color: '#2285b6',
      description: '<b>12</b> jobs may interest based on your <b>profile</b> - Overview'
    },
    {
      img:'../img/icons/pinterest.svg',
      title: 'Pinterest',
      count: 345,
      color: '#bd0a1c',
      description: '<b>Sarah Knight</b>, <b>Lisa Fox</b> and <b>48</b> other Pinned your pin <span class="small thin"><b>2</b> days ago</span>'
    },
  ]
});
