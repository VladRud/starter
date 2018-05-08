'use strict';

import template from './stats-origin.html';

  const StatsOriginComponent = {
    bindings: {
      statsByOrigin: '<',
      origins: '<'
    },
    templateUrl: template
  };

  export default StatsOriginComponent;
