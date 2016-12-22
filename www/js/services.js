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
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    msgCount: 1,
    time: '10.35 AM',

    lastText: 'So careful with our relationship. Now you are part of us.',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    time: 'YESTERDAY',

    name: 'Perry Governor',
    online: true,

    lastText: 'You have mistaken I am not the person whom u r looking for!',
    face: 'img/perry.png'
  }, {
    id: 4,
    time: 'YESTERDAY',

    name: 'Mike Harrington',
    lastText: 'But I still have that voucher for mc donalds! What about that instead?',
    face: 'img/mike.png'
  },
  {
    id: 5,
    msgCount: 2,
    time: 'FRIDAY',

    name: 'Alice Whitman',
    online: true,
    lastText: 'Thank You hunny. I love u sooooo much......',
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
});
