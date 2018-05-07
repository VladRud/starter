'use strict';

const ModalFactory = function() {
  return {
    confirm: {
      delete: function (cb = angular.noop) {
        return () => {
          cb()
        }
      },
      pageLeave: function (cb = angular.noop) {
        return () => {
          cb()
        }
      }
    }
  };
};

export default ModalFactory;
