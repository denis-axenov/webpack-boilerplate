import {isBoolean, isNull, isNumber, isObject, isUndefined} from "@scripts/utils/types"

export default class Module {
    constructor(config) {

        if (!isObject(config)) {
            throw new Error("Parameter must be an object");
        }

        if (!('param1' in config) || !('param2' in config)) {
            throw new Error("Required parameters param1 and param2 must be provided");
        }

        if (!isNumber(config.param1) || !isNumber(config.param2)) {
            throw new Error("Parameters param1 and param2 must be numbers");
        }

        this.config = config;
        this.init();
    }

    init() {
        console.log("Module initialized", this.config);
    }
}