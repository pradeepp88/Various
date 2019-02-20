import store from '@/store';

export default class AccessToken {
    public token: string;
    constructor() {
        this.token = store.state.token;
    }
}
