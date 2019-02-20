import AccessToken from '@/model/AccessToken';

export default class RequestBase {
        public AccessToken: AccessToken;
        constructor() {
            this.AccessToken = new AccessToken();
        }
}

