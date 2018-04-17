export default class TestController {
    constructor(){
        let $ctrl = this;

        $ctrl.input = 55;
        this.updateData();

    }

    updateData(arg){
        this.data = parseInt(this.input) * 2;
    }

}