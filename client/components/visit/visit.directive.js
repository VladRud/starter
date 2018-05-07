'use strict';

const VisitsDirective = () => ({
  templateUrl: 'components/visit/visit.html',
  scope: {},
  bindToController: {
    visit: '=',
    candidateName: '@'
  },
  restrict: 'E',
  controller: 'VisitController',
  controllerAs: 'vm'
});

export default VisitsDirective;
