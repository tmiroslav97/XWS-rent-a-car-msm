import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    AD_BASE: '/ad',
    
};

class AdServices extends HttpBaseClient {

    createdAd = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.AD_BASE,
            payload,
            {
                headers : {
                    'Content-Type': 'multipart/form-data',
                },
            });
        
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

    fetchAdsPaginatedSearch = async payload => {
        console.log("SERVICEEE SEARCH")
        console.log(payload);
        const response = await this.getApiClient().get(
            FINALPOINTS.AD_BASE + "/search", {
                params: {
                    location: payload.location,
                    startDate: payload.startDate,
                    endDate: payload.endDate
                }
            }
        );
            console.log(response);
        return response.data;
    };
}

export default new AdServices();