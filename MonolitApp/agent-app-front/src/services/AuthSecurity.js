import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/sign-up',
    CHANGE_PASSWORD: '/auth/change-pass',
    CREATED_AD: '/ad/createdAd'
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

    register = async payload => {
        const response  = await this.getApiClient().post(
            FINALPOINTS.REGISTRATION,
            payload
        );
        return response.data;
    };

    createdAd = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.CREATED_AD,
            payload
        );
        
        return response.data;
    };

};

export default new AuthSecurity();