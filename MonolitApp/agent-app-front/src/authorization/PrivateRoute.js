import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../store/user/selectors';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ component: Component, accessRole = null, ...rest }) => {
    const token = useSelector(tokenSelector);


    function hasRightRole() {
        if (!accessRole) {
            return true;
        }

        var role = null;

        if (token != null) {
            role = jwt_decode(token).role;
        }

        return accessRole.includes(role);
    }

    return (
        <Route
            {...rest}
            render={props => token && hasRightRole() ? (<Component {...props} />) : (<Redirect to="/page-not-found" />)}
        />
    );
};

export default PrivateRoute;