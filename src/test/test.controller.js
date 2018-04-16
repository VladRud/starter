
export default class TestController {
    constructor($interval){
        this.data = 1;
        this.input = 55;
        let $ctrl = this;

        $interval(() => {$ctrl.data = $ctrl.input; console.log($ctrl.data)}, 1000)
    }

}