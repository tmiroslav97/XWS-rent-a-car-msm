import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    CAR_MANUFACTURER_BASE: '/car-man',
};

class CodebookService extends HttpBaseClient {

    fetchCarManufacturersPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.CAR_MANUFACTURER_BASE, {
            params: {
                nextPage: payload.nextPage,
                size: payload.size
            }
        }
        );

        return response.data;
    };

    addCarManufacturer = async payload => {
        this.attachHeaders({
            "Content-Type": "text/plain;charset=UTF-8"
        });
        const response = await this.getApiClient().post(
            FINALPOINTS.CAR_MANUFACTURER_BASE,
            payload
        );

        return response.data;
    };

    editCarManufacturer = async payload => {
        const response = await this.getApiClient().put(
            FINALPOINTS.CAR_MANUFACTURER_BASE,
            payload
        );

        return response.data;
    };

};

export default new CodebookService();