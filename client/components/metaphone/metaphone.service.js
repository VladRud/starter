'use strict';

const MetaphoneFactory = function (appConfig, Translit, metaphoneLib) {

  // Public API here
  return {
    process(str) {
      return metaphoneLib(Translit.process(str));
    }
  };
};

export default MetaphoneFactory;
