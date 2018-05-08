'use strict';

import template from './stats-agency.html';

const StatsAgencyComponent = {
  bindings: {
    statsByAgency: '<',
    agencies: '<'
  },
  templateUrl: template
};

export default StatsAgencyComponent;