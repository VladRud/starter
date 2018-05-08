'use strict';

import template from './interviewStatus.html';

const InterviewStatusDirective = () => ({
  templateUrl: template,
  scope: {
    stage: '=',
    dateTime: '='
  },
  restrict: 'E',
  controller: ($scope) => {
    $scope.isPastInterview = () => {
      return $scope.dateTime.getTime() < Date.now();
    };

    $scope.texts = {
      'cv': 'CV received',
      'skype': 'Skype interview',
      'office': 'Office interview',
      'proposal': 'Waiting for answer on proposal done'
    };
  }
});

export default InterviewStatusDirective;
