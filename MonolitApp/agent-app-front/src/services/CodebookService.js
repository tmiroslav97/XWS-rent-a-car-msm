import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    FETCH_CAR_MANUFACTURERS: '/car-man'
};

class CodebookService extends HttpBaseClient {

    fetchCarManufacturers = async => {
        const response = await this.getApiClient().get(
            FINALPOINTS.FETCH_CAR_MANUFACTURERS,
            payload
        );

        return response.data;
    };


};

export default new CodebookService();