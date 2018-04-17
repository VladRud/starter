import TestController from './test.controller';

export const TestComponent = {
    template: `
        <input ng-model="$ctrl.a1" ng-change="$ctrl.updateSum($ctrl.a1, $ctrl.a2)"/> <br>
        <input ng-model="$ctrl.a2" ng-change="$ctrl.updateSum($ctrl.a1, $ctrl.a2)"/> <br>
        Sum: {{$ctrl.sum}}`,
    controller: TestController
}