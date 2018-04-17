import TestController from './test.controller';

export default {
    template: `some test text-- {{ $ctrl.data }} -and more <br>
    <input ng-model="$ctrl.input" ng-change="$ctrl.updateData(4)"/> `,
    controller: TestController
}