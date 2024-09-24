
export default class Module {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        console.log('Module initialized', this.config);
    }
}