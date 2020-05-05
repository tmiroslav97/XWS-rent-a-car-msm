const reducer = 'codebookReducer';

export const carManufacturersSelector = state => state[reducer].carManufacturers;
export const isFetchCodebookSelector = state => state[reducer].isFetchCodebook;