import TestController from './test.controller';

export default {
    template: `
        <input ng-model="$ctrl.a1" ng-change="$ctrl.updateSum($ctrl.a1, $ctrl.a2)"/> <br>
        <input ng-model="$ctrl.a2" ng-change="$ctrl.updateSum($ctrl.a1, $ctrl.a2)"/> <br>
        Sum: {{$ctrl.sum}}`,
    controller: TestController
}