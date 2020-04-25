import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/reg',
    CHANGE_PASSWORD: '/auth/change-pass'
};

class AuthSecurity extends HttpBaseClient {

    login = async payload => {
        const response  = await this.getApiClient().post(
            FINALPOINTS.LOGIN,
            payload
        );
        
        localStorage.setItem('token', response.data);

        return response.data;
    };

};

export default new AuthSecurity();