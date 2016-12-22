angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    name: 'Max Lynx',
    online: true,
    msgCount: 5,
    time: '11.35 AM',
    message: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    msgCount: 1,
    time: '10.35 AM',
    message: 'So careful with our relationship. Now you are part of us.',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    time: 'YESTERDAY',
    name: 'Perry Governor',
    online: true,

    message: 'You have mistaken I am not the person whom u r looking for!',
    face: 'img/perry.png'
  }, {
    id: 4,
    time: 'YESTERDAY',
    name: 'Mike Harrington',
    message: 'But I still have that voucher for mc donalds! What about that instead?',
    face: 'img/mike.png'
  }, {
    id: 5,
    msgCount: 2,
    time: 'FRIDAY',

    name: 'Alice Whitman',
    online: true,
    message: 'Thank You hunny. I love u sooooo much......',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Socials', function() {

  var socials = [{
    img: '../img/icons/fb.svg',
    title: 'Facebook',
    count: 56,
    color: '#375a95',
    description: '<b>Donald Trump</b> has liked your status <i class="italic thin">"F*ck me I am Famous"</i> <span class="small"><b>13</b> min ago<span>'
  }, {
    img: '../img/icons/youtube.svg',
    title: 'Youtube',
    count: 10,
    color: '#e52215',
    color: '#e52215',
    
    description: '<b>Jay Garic</b> has commented on your proile <i class="italic thin">"How should I <b>buy</b> your app"</i>'
  }, {
    img: '../img/icons/twitter.svg',
    title: 'Twitter',
    count: 78,
    color: '#2196f3',
    url: 'https://twitter.com/deshatom',

    description: '<b>NodeSphere and 6 others</b> liked your Retweet <span class="small thin"> Nov <b>9</b></span>'
  },

  {
    img: '../img/icons/snapchat.svg',
    title: 'SnapChat',
    count: 2,
    color: '#b2af16',
    description: 'You have few messages from <b>SnapChat<b> 12 min ago'
  }, {
    img: '../img/icons/linkedin.svg',
    title: 'LinkedIn',
    count: 65,
    color: '#2285b6',
    description: '<b>12</b> jobs may interest based on your <b>profile</b> - Overview'
  }, {
    img: '../img/icons/pinterest.svg',
    title: 'Pinterest',
    count: 345,
    color: '#bd0a1c',
    url: 'https://www.pinterest.com/deshatom/',

    description: '<b>Sarah Knight</b>, <b>Lisa Fox</b> and <b>48</b> other Pinned your pin <span class="small thin"><b>2</b> days ago</span>'
  },
];

return {
  all: function() {
    return socials;
  },
};
})


.factory('Accounts', function() {
  var socials = [{
    img: '../img/icons/ionic-icon.png',
    title: 'Ionic Market',
    color: '#229cff',
    url: 'https://market.ionic.io/user/305270',
    description: 'You can find all of my <b>Premium </b> and  <b>Free</b> ionic  <b>Apps</b> from ionic Market.'
  },{
    img: '../img/icons/youtube.svg',
    title: 'Youtube',
    color: '#e52215',
    url: 'https://www.youtube.com/channel/UCXrvOXBvlugqfohxk76hvog',
    description: 'You <b>can access</b> My Videos in  <i class="italic thin"> Youtube. Feel free to <b>SUBSCRIBE</b> my channel</i>'
  }, {
    img: '../img/icons/twitter.svg',
    title: 'Twitter',
    color: '#2196f3',
    url: 'https://twitter.com/deshatom',
    description: 'Do you <b>need</b> to know my  <span class="thin ">last works..<b> Follow me on Twitter</b></span>'
  },{
    img: '../img/icons/pinterest.svg',
    title: 'Pinterest',
    color: '#bd0a1c',
    url: 'https://www.pinterest.com/deshatom/',
    description: 'You can <b>see </b> more <b>Projects</b> that <b>I </b> have done. Please follow me on  <b>Pinterest</b>'
  },
];

return {
  all: function() {
    return socials;
  },
};
});
