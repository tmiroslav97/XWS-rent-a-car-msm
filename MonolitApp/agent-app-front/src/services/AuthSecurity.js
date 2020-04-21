import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/reg',
    CHANGE_PASSWORD: '/auth/change-pass'
};

class AuthSecurity extends HttpBaseClient {

    login = async payload => {
        const data = await this.getApiClient().post(
            FINALPOINTS.LOGIN,
            payload
        );
        
        localStorage.setItem('token', data.token);

        return data ;
    };

};

export default new AuthSecurity();