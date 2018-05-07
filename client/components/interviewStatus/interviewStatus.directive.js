'use strict';

const InterviewStatusDirective = () => ({
  templateUrl: 'components/interviewStatus/interviewStatus.html',
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
