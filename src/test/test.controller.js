export default class TestController {
    constructor(){
        let $ctrl = this;

        $ctrl.a1 = 1;
        $ctrl.a2 = 2;
        this.updateSum($ctrl.a1, $ctrl.a2);

    }

    updateSum(arg1, arg2){
        this.sum = parseInt(arg1) + parseInt(arg2);
    }

}