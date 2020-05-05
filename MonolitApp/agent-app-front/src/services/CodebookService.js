import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    FETCH_CAR_MANUFACTURERS: '/car-man'
};

class CodebookService extends HttpBaseClient {

    fetchCarManufacturersPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.FETCH_CAR_MANUFACTURERS, {
                params: {
                    nextPage: payload.nextPage
                }
            }
        );
        console.log(response);
        return response.data;
    };


};

export default new CodebookService();