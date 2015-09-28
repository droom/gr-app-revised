angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    receiptID: '00001',
    firstItem: 'Berchirly Vintage Military Men Canvas Messenger Bag for 13.3-17" Laptop'
  }, {
    id: 1,
    name: 'Max Lynx',
    receiptID: '00002',
    firstItem: 'iPhone 6S Case, Verus for Apple iPhone 6 and iPhone 6S 4.7" Devices'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    receiptID: '00003',
    firstItem: 'APC P11VNT3 Performance SurgeArrest 11-Outlet with Telephone, Coaxial, and Network Protection'
  }, {
    id: 3,
    name: 'Perry Governor',
    receiptID: '00004',
    firstItem: 'Seagate Backup Plus Slim 2TB Portable External Hard Drive with 200GB of Cloud Storage & Mobile Device Backup USB 3.0 (STDR2000100) - Black'
  }, {
    id: 4,
    name: 'Mike Harrington',
    receiptID: '00005',
    firstItem: 'Fitbit Surge Fitness Superwatch, Black, Large'
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
