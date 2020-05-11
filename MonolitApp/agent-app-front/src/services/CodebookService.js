import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    CAR_MANUFACTURER_BASE: '/car-man',
    CAR_TYPE_BASE: '/car-type'
};

class CodebookService extends HttpBaseClient {

    //for car types
    fetchCarTypesPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.CAR_TYPE_BASE, {
            params: {
                nextPage: payload.nextPage,
                size: payload.size
            }
        }
        );

        return response.data;
    };

    addCarType = async payload => {
        const response = await this.getApiClient().post(
            FINALPOINTS.CAR_TYPE_BASE,
            payload, {
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        }
        );
        return response.data;
    };

    editCarType = async payload => {
        const response = await this.getApiClient().put(
            FINALPOINTS.CAR_TYPE_BASE,
            payload
        );

        return response.data;
    };

    deleteCarType = async payload => {
        const response = await this.getApiClient().delete(
            FINALPOINTS.CAR_TYPE_BASE,
            payload, {
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        }
        );

        return response.data;
    };

    //for car manufacturers
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
        const response = await this.getApiClient().post(
            FINALPOINTS.CAR_MANUFACTURER_BASE,
            payload, {
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        }
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

    deleteCarManufacturer = async payload => {
        const response = await this.getApiClient().delete(
            FINALPOINTS.CAR_MANUFACTURER_BASE,
            payload, {
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        }
        );

        return response.data;
    };

};

export default new CodebookService();