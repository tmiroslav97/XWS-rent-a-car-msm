import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    AD_BASE: '/ad',
    
};

class AdServices extends HttpBaseClient {

    createdAd = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.AD_BASE,
            payload
        );
        
        return response.data;
    };

    uploadImage = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.AD_BASE + "/upload",
            payload,
            {
                headers : {
                    'Content-Type': 'multipart/form-data',
                },
            }
            );
        
        return response.data;
    };

    fetchAdsPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.AD_BASE, {
                params: {
                    nextPage: payload.nextPage,
                    size: payload.size
                }
            }
        );

        return response.data;
    };

    fetchAd = async payload => {
        console.log("SERVICE AD")
        console.log(payload)
        const response = await this.getApiClient().get(
            FINALPOINTS.AD_BASE + "/"  + payload
        
        );

        return response.data;
    };
}

export default new AdServices();