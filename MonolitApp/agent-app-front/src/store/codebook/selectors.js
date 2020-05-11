const reducer = 'codebookReducer';

export const carManufacturersSelector = state => state[reducer].carManufacturers;
export const carTypesSelector = state => state[reducer].carTypes;
export const fuelTypesSelector = state => state[reducer].fuelTypes;
export const gearboxTypesSelector = state => state[reducer].gearboxTypes;
export const carModelsSelector = state => state[reducer].carModels;
