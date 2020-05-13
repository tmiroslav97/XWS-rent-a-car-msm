import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    CREATED_AD: '/ad',
    FETCH_ADS: '/ad'
};

class AdServices extends HttpBaseClient {

    createdAd = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.CREATED_AD,
            payload
        );
        
        return response.data;
    };

    fetchAdsPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.FETCH_ADS, {
                params: {
                    nextPage: payload.nextPage,
                    size: payload.size
                }
            }
        );

        return response.data;
    };
}

export default new AdServices();