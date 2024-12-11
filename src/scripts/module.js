export default class Module {
    constructor(moduleConfig) {

        if (typeof moduleConfig !== 'object' || moduleConfig === null || Array.isArray(moduleConfig)) {
            throw new Error('Parameter must be an object');
        }

        if (!('param1' in moduleConfig) || !('param2' in moduleConfig)) {
            throw new Error('Required parameters param1 and param2 must be provided');
        }

        if (typeof moduleConfig.param1 !== 'number' || typeof moduleConfig.param2 !== 'number') {
            throw new Error('Parameters param1 and param2 must be numbers');
        }

        this.config = moduleConfig;
        this.init();
    }

    init() {
        console.log('Module initialized', this.config);
    }
}