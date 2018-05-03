export default class HelloController {
    constructor(){
        this.a1 = 1;
        this.a2 = 2;
        this.updateSum(this.a1, this.a2);
    }

    updateSum(arg1, arg2){
        this.sum = parseInt(arg1) + parseInt(arg2);
    }

}