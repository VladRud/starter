'use strict';

import VisitController from './visit.controller';
import template from './visit.html';

const VisitsDirective = () => ({
  templateUrl: template,
  scope: {},
  bindToController: {
    visit: '=',
    candidateName: '@'
  },
  restrict: 'E',
  controller: VisitController,
  controllerAs: 'vm'
});

export default VisitsDirective;
