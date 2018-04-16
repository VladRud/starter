import TestController from './test.controller';

export default {
    template: `some test text-- {{ $ctrl.data }} -and more
    <input ng-model="$ctrl.input"/> `,
    controller: TestController
}