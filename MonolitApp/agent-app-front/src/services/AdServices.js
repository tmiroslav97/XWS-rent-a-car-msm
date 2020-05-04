import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    CREATED_AD: '/ad'
};

class AdServices extends HttpBaseClient {

    createdAd = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.CREATED_AD,
            payload
        );
        
        return response.data;
    };
}

export default new AdServices();