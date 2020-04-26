import axios from 'axios';
import { AGENTAPP_BASE } from '../common/agentapp-api';

class HttpBaseClient {

    constructor(){
        this.client = axios.create({
            baseURL:AGENTAPP_BASE.URL
        });
        this.setInterceptor();
    }

    setInterceptor = () => {
        this.client.interceptors.request.use(config => {
            const token = window.localStorage.getItem("token");

            if (!!token) {
                Object.assign(config.headers, {
                    Authorization: `Bearer ${token}`
                });
            }

            return config;
        });

        this.client.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            //const { status, data, config } = error.response;
            //if (status === 401) {
                //history.push('/unauthorized');
            //}
            //console.log(error.response.data);
            throw error;
        });
    };

    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }

    detachHeader(headerKey) {
        delete this.client.defaults.headers[headerKey];
    }

    getApiClient() {
        return this.client;
    }

};

export default HttpBaseClient;