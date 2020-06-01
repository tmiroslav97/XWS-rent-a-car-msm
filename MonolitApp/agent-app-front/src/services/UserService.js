import HttpBaseClient from './HttpBaseClient';

const FINALPOINTS = {
    END_USER_SERVICE_BASE: '/end-user'
};

class UserService extends HttpBaseClient {

    fetchEndUsersPaginated = async payload => {
        const response = await this.getApiClient().get(
            FINALPOINTS.END_USER_SERVICE_BASE, {
            params: {
                nextPage: payload.nextPage,
                size: payload.size
            }
        }
        );
        return response.data;
    };


};

export default new UserService();