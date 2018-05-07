'use strict';

const SocketFactory = function() {
  return {
    socket: {
      connect: function() {},
      on: function() {},
      emit: function() {},
      receive: function() {}
    },

    syncUpdates: function() {},
    unsyncUpdates: function() {}
  };
};

export default SocketFactory;
